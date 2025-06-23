import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import logo from '../images/logo.png'
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">ForeFight Era</h3>
            <p className="text-gray-400">
            ForeFight Era, we help businesses and startups establish a strong online presence through custom website development, responsive web design, e-commerce solutions, and branding services. Our mission is to empower companies with affordable, high-quality digital solutions.

            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/ForeFight-Era/pfbid029cWA8LXEaJ6Pi7r1v8vz9LMJDs12F3LuNyi3nYDTvqZ84ogSdkswhwt45KAm71Zzl/?rdid=lBu1MexTXAfCD7st&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AFBooZM9Q%2F" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              
              <a href="https://www.instagram.com/forefight_era/?hl=en" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/ontimitta-tharun-8510842aa/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                Custom Website Development
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                Responsive Web Design
               
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                 E-Commerce Developme
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                Logo Design & Branding
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                Website Maintenance
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                Portfolio Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-indigo-400" />
                <span className="text-gray-400">
                  Madanpalle, pin 517325 ,AP
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-indigo-400" />
                <span className="text-gray-400">+91 8919403905</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-indigo-400" />
                <span className="text-gray-400">forefightera@gmail.com</span>
              </li>
            </ul>
            <br></br>
            <img src={logo} alt='logo' className="h-25 w-20"/>
          </div>
         
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} ForeFight Era. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}