import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin, Twitter, Mail, Phone, MapPin, Award } from 'lucide-react';
import logo from './logo.jpg';
function Footer() {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Events', href: '#events' },
    { name: 'PR & Work', href: '#pr-work' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* About VMEDHA */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt='Vmedha logo' className='w-10 h-10 object-ontain' />
              <span className="text-xl font-bold">Vmedha</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              VMEDHA is a student-led club that organizes cultural, technical, and creative events, inspiring collaboration and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index }}
                >
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <motion.li className="flex items-center space-x-2 text-gray-400" whileHover={{ x: 5, color: '#F472B6' }} transition={{ type: 'spring', stiffness: 200 }}>
                <Mail className="w-4 h-4" />
                <span className="text-sm">vmedha.club@example.com</span>
              </motion.li>
              <motion.li className="flex items-center space-x-2 text-gray-400" whileHover={{ x: 5, color: '#F472B6' }} transition={{ type: 'spring', stiffness: 200 }}>
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 1234567890</span>
              </motion.li>
              <motion.li className="flex items-center space-x-2 text-gray-400" whileHover={{ x: 5, color: '#F472B6' }} transition={{ type: 'spring', stiffness: 200 }}>
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Hyderabad, Telangana</span>
              </motion.li>
            </ul>
          </div>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Vmedha Club. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
  <a
    href="https://www.instagram.com/cbit.vmedha" // Replace with your Instagram
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
  >
    <Instagram className="w-5 h-5" />
  </a>
  <a
    href="#" // Placeholder for Facebook
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
  >
    <Facebook className="w-5 h-5" />
  </a>
  <a
    href="https://www.linkedin.com/in/VMEDHA CBIThttps://www.linkedin.com/company/vmedha-cbit/posts/?feedView=all" // Placeholder for LinkedIn
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
  >
    <Linkedin className="w-5 h-5" />
  </a>
  <a
    href="#" // Placeholder for Twitter
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
  >
    <Twitter className="w-5 h-5" />
  </a>
</div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;