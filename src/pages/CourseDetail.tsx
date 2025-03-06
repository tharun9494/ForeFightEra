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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Course Header */}
          <div className="relative h-96 rounded-xl overflow-hidden mb-8">
            <img
              src={course.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085"}
              alt={course.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center">
              <div className="max-w-3xl mx-auto text-center text-white p-8">
                <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
                <div className="flex justify-center items-center space-x-6">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 mr-2 text-yellow-400" />
                    <span>{course.rating || 4.5}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-4 mb-8 overflow-x-auto">
            <Button
              variant={activeTab === 'about' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('about')}
            >
              About
            </Button>
            {/* Removed Course Content, Assignments, Resources, Python IDE, and Course Assistant tabs */}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {activeTab === 'about' && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                  <div className="prose max-w-none">
                    <p className="text-gray-600 mb-6">{course.aboutCourse || course.description}</p>
                    <h3 className="text-xl font-semibold mb-3">Prerequisites</h3>
                    <p className="text-gray-600 mb-6">{course.prerequisites}</p>
                    <h3 className="text-xl font-semibold mb-3">Learning Objectives</h3>
                    <p className="text-gray-600">{course.learningObjectives}</p>
                  </div>
                </div>
              )}
              {/* Removed content for Course Content, Assignments, Resources, Python IDE, and Course Assistant */}
            </div>
            {/* Sidebar */}
          </div>
        </motion.div>
      </div>
    </div>
  );
}