import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Course } from './types';

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { course: initialCourse } = location.state || {};
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('about');
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    if (!initialCourse) {
      navigate('/programs');
      return;
    }
    setLoading(false);
    setCourse(initialCourse);
  }, [initialCourse, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Course not found</h2>
          <Button onClick={() => navigate('/programs')}>Return to Programs</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="min-h-[calc(100vh-6rem)] flex flex-col justify-center"
        >
          {/* Course Header */}
          <div className="relative h-64 rounded-xl overflow-hidden mb-6">
            <img
              src={course.imageUrl || "https://images.unsplash.com/photo-1498050108023-c5249f4df085"}
              alt={course.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center">
              <div className="max-w-2xl mx-auto text-center text-white p-6">
                <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
                <div className="flex justify-center items-center space-x-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                    <span className="text-sm">{course.rating || 4.5}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-4 mb-6 overflow-x-auto">
            <Button
              variant={activeTab === 'about' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('about')}
              className="text-sm"
            >
              About
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Main Content */}
            <div className="flex items-center justify-center">
              {activeTab === 'about' && (
                <div className="bg-white rounded-xl shadow-lg p-6 text-center w-full">
                  <h2 className="text-2xl font-bold mb-4 text-indigo-600">About This Project</h2>
                  <div className="prose max-w-none mx-auto">
                    <p className="text-gray-600 mb-6 text-base leading-relaxed">{course.aboutCourse || course.description}</p>
                    <div className="flex flex-col items-center space-y-4">
                      <h3 className="text-base text-blue-900 font-semibold mb-2">
                        <a href={course.websiteLink} target="_blank" rel="noopener noreferrer" 
                           className="hover:text-indigo-600 transition-colors duration-300">
                          {course.websiteLink}
                        </a>
                      </h3>
                      <Button 
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 text-sm"
                        onClick={() => window.open(course.websiteLink, '_blank')}
                      >
                        project link
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}