import { Calendar, Users, Award, Mail, Phone, MapPin } from 'lucide-react';
import Header from './Header'; // Assuming you save the file as Header.jsx
import Footer from './Footer'; // Assuming you save the file as Footer.jsx
import { motion } from 'framer-motion';
function App() {
  // navItems logic moved to Header and Footer components
  
  return (
    <div className="min-h-screen bg-white">
      <Header >
        <motion.header
          initial={{ y:-100, opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration: 0.8, ease:"easeOut"}}
          className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 bakdrop-blur-sm shadow-md text-white"
          >
            {/* your nav content */}
          </motion.header>
          
        </Header>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Get in touch with us</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-700">vmedha.club@example.com</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-700">+91 1234567890</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-700">Hyderabad, Telangana</p>
            </div>
          </div>
        </div>
      </section>

      <Footer>
        <motion.footer
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 text-white py-12"
        >
          {/* footer content */}
        </motion.footer>
      </Footer>
    </div>
  );
}

export default App;
