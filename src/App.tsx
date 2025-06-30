import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Blogs from './pages/Blogs';
import About from './pages/About';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import RefundPolicy from './pages/RefundPolicy';
import CourseDetail from './pages/CourseDetail';
import BlogDetail from './pages/BlogDetail';
import AdminDashboard from './pages/AdminDashboard';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import { useEffect, useState } from 'react';
import { auth, db } from './lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import CourseDetails2 from './pages/CourseDetails2';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        if (user) {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          const userData = userDoc.data();
          setIsAdmin(userData?.email === 'ontimittatharun2005@gmail.com');
        } else {
          setIsAdmin(false);
        }
      });

      return () => unsubscribe();
    };

    checkAdmin();
  }, []);   

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar isAdmin={isAdmin} />
        <div className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/projects" element={<Programs />} /> 
            <Route path="/projects/:id" element={<CourseDetail />} />
            <Route path="/services" element={<Blogs />} />
            <Route path="/services/:id" element={<BlogDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/profile" element={<Profile />} />
            {isAdmin && <Route path="/admin" element={<AdminDashboard />} />}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;