import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users, Star, Video, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db, auth } from '@/lib/firebase';
import toast from 'react-hot-toast';

interface Course {
  id: string;
  title: string;
  description: string;
  image?: string;
  category: string;
  students: number;
  rating: number | string;
}

interface VideoData {
  url: string;
  title: string;
  description: string;
  thumbnail: string;
}

export default function Programs() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, 'programs'));
        
        if (querySnapshot.empty) {
          console.log('No programs found');
          setCourses([]);
          return;
        }

        const enrollmentsSnapshot = await getDocs(collection(db, 'enrollments'));
        const ratingsSnapshot = await getDocs(collection(db, 'ratings'));

        // Get all enrollments
        const enrollments = enrollmentsSnapshot.docs.map(doc => doc.data());
        // Get all ratings
        const ratings = ratingsSnapshot.docs.map(doc => doc.data());

        const coursesData = querySnapshot.docs.map(doc => {
          const courseId = doc.id;
          // Count students enrolled in this course
          const studentCount = enrollments.filter(e => e.courseId === courseId).length;
          // Calculate average rating for this course
          const courseRatings = ratings.filter(r => r.courseId === courseId);
          const averageRating = courseRatings.length > 0 
            ? (courseRatings.reduce((acc, curr) => acc + curr.rating, 0) / courseRatings.length).toFixed(1)
            : 0;

          return {
            id: courseId,
            ...doc.data(),
            students: studentCount,
            rating: averageRating
          } as Course;
        });
        
        setCourses(coursesData);
      } catch (error: any) {
        console.error('Error fetching courses:', error);
        if (error.code === 'permission-denied') {
          toast.error('You do not have permission to view courses. Please contact support.');
        } else {
          toast.error('Failed to load courses. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };

    // Check if user is authenticated before fetching
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetchCourses();
      } else {
        // If not authenticated, still try to fetch public courses
    fetchCourses();
      }
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, []);

  const fetchVideoUrl = async (courseId: string): Promise<string> => {
    // Implement your video URL fetching logic here
    return '';
  };

  const handleEnroll = async (courseId: string) => {
    try {
      const user = auth.currentUser;
      if (!user) {
        toast.error('Please login to enroll in courses');
        return;
      }

      // Check if user is already enrolled
      const enrollmentsRef = collection(db, 'enrollments');
      const enrollmentQuery = await getDocs(enrollmentsRef);
      const existingEnrollment = enrollmentQuery.docs.find(
        doc => doc.data().userId === user.uid && doc.data().courseId === courseId
      );

      if (existingEnrollment) {
        toast.error('You are already enrolled in this course');
        return;
      }

      await addDoc(collection(db, 'enrollments'), {
        userId: user.uid,
        courseId: courseId,
        enrolledAt: new Date().toISOString(),
        progress: 0,
        status: 'active'
      });

      // Fetch video URL after successful enrollment
      const videoUrl = await fetchVideoUrl(courseId);
      setSelectedVideo({
        url: videoUrl,
        title: 'Video Title',
        description: 'Video Description',
        thumbnail: 'Thumbnail URL'
      });

      toast.success('Successfully enrolled in the course!');
      navigate('/profile');
    } catch (error) {
      console.error('Error enrolling in course:', error);
      toast.error('Failed to enroll in course');
    }
  };

  const handleRating = async (courseId: string, rating: number) => {
    try {
      const user = auth.currentUser;
      if (!user) {
        toast.error('Please login to rate this course');
        return;
      }

      // Check if user has already rated
      const ratingsRef = collection(db, 'ratings');
      const ratingQuery = await getDocs(ratingsRef);
      const existingRating = ratingQuery.docs.find(
        doc => doc.data().userId === user.uid && doc.data().courseId === courseId
      );

      if (existingRating) {
        toast.error('You have already rated this course');
        return;
      }

      // Add new rating
      await addDoc(collection(db, 'ratings'), {
        userId: user.uid,
        courseId: courseId,
        rating: rating,
        createdAt: new Date().toISOString()
      });

      toast.success('Thank you for rating!');
      // Refresh courses to update the rating
      window.location.reload();
    } catch (error) {
      console.error('Error rating course:', error);
      toast.error('Failed to submit rating');
    }
  };

  const VideoPreviewModal = ({ video, onClose }: { video: VideoData; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-3xl w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">{video.title}</h3>
          <Button variant="ghost" onClick={onClose}>×</Button>
        </div>
        <div className="aspect-video rounded-lg overflow-hidden bg-black mb-4">
          <video
            src={video.url}
            controls
            className="w-full h-full"
            poster={video.thumbnail}
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="text-gray-600 mb-4">{video.description}</p>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-8">Our Projects</h1>
        {courses.length === 0 ? (
          <p className="text-center text-gray-500 py-8">No programs available at the moment.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <motion.div
                key={course.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={course.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085"}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-indigo-600">
                      {course.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{course.description}</p>
                  <div className="flex items-center justify-between">
                    
                    <div className="flex space-x-2">
                      <Link to={`/projects/${course.id}`} state={{ course }}>
                        <Button variant="outline">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <div className="flex items-center text-yellow-500 cursor-pointer">
                      <Star 
                        className={`w-4 h-4 mr-1 ${auth.currentUser ? 'cursor-pointer' : ''}`} 
                        onClick={() => auth.currentUser && handleRating(course.id, 5)}
                      />
                      <span className="text-sm">
                        {typeof course.rating === 'number' && course.rating > 0 ? course.rating : 'No ratings'}
                      </span>
                    </div>

                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            {/* Static Program Example
          
            <motion.div
              key="static-course"
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                  alt="Static Course Title"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-indigo-600">
                    python
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Numpy</h3>
                <p className="text-gray-600 mb-4">NumPy, short for Numerical Python, is a fundamental library for numerical and scientific computing in Python. It provides support for large, multi-dimensional arrays and matrices, along with a collection of high-level mathematical functions to operate on these arrays efficiently.</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">3 hours</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm">10 students</span>
                  </div>
                  <div className="flex items-center text-yellow-500 cursor-pointer">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="text-sm">4.5</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-indigo-600">
                    $10
                  </span>
                  <div className="flex space-x-2">
                    <Link to={`/programs/coursedetails2`} state={{ 
                      course: {
                        title: "Numpy",
                        description: "NumPy, short for Numerical Python...",
                        category: "python",
                        duration: "3 hours",
                        students: 10,
                        rating: 4.5,
                        price: 10
                      }
                    }}>
                      <Button variant="outline">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Button 
                      onClick={() => handleEnroll('CourseDetail2')}
                    >
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
            */}
          </div>
        )}
      </motion.div>

      {/* Video Preview Modal */}
      {selectedVideo && (
        <VideoPreviewModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
}