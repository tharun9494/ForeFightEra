import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tag, ExternalLink, MessageSquare, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  category: string;
  websiteLink?: string;
}

const testimonials = [
    { name: "Client A", feedback: "Working with ForeFight Era was a game-changer. Their attention to detail and commitment to quality is unmatched.", rating: 5 },
    { name: "Client B", feedback: "The team delivered a stunning website that perfectly captured our brand's vision. Highly recommended!", rating: 5 },
    { name: "Client C", feedback: "Professional, efficient, and incredibly creative. Our new website has received nothing but positive feedback.", rating: 5 },
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<string[]>(['All']);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, 'programs'));
        
        if (querySnapshot.empty) {
          setProjects([]);
          return;
        }

        const projectsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Project[];
        
        setProjects(projectsData);
        setFilteredProjects(projectsData);

        // Extract unique categories
        const uniqueCategories = ['All', ...new Set(projectsData.map(p => p.category))];
        setCategories(uniqueCategories);

      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);
  
  const handleFilter = (category: string) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category === category));
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100 } }
  };
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-20 bg-gray-50 text-center"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl font-extrabold text-gray-900 mb-4"
          >
            Our Work
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-600"
          >
            A showcase of our passion, creativity, and commitment to excellence.
          </motion.p>
        </div>
      </motion.section>

      {/* Filter and Projects Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => handleFilter(category)}
                className={`rounded-full px-6 ${activeCategory === category ? 'bg-yellow-500 hover:bg-yellow-600' : ''}`}
              >
                {category}
              </Button>
            ))}
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            animate="show"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                layout
                className="bg-white rounded-2xl shadow-xl overflow-hidden group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.imageUrl || "https://images.unsplash.com/photo-1498050108023-c5249f4df085"}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                    <a href={project.websiteLink || '#'} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors">
                      <ExternalLink className="w-6 h-6"/>
                    </a>
                  </div>
                  <span className="flex items-center text-sm font-medium text-gray-500 mb-4">
                    <Tag className="w-4 h-4 mr-2"/> {project.category}
                  </span>
                  <p className="text-gray-600 line-clamp-3">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-yellow-600 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real feedback from the amazing businesses we've had the pleasure to work with.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={{ show: { transition: { staggerChildren: 0.2 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={item} className="bg-white p-8 rounded-2xl shadow-lg">
                <MessageSquare className="w-10 h-10 text-yellow-400 mb-4"/>
                <p className="text-gray-600 mb-6">"{testimonial.feedback}"</p>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-800">- {testimonial.name}</span>
                    <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current"/>)}
                    </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}