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

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Empowering Creativity<br />Through Events & Culture
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Join Vmedha in inspiring collaboration, innovation, and creativity through our diverse range of cultural and technical events.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Join Us Today
            </a>
          </div>
        </div>
        <div className="bg-gradient-to-t from-white via-white/80 to-transparent h-24"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About VMEDHA</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Vmedha is a student-led club dedicated to organizing cultural, technical, and creative events that inspire collaboration and innovation. We believe in the power of creativity to transform ideas into reality.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our mission is to create a vibrant community where students can explore their passions, develop new skills, and connect with like-minded individuals who share their enthusiasm for learning and growth.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through our diverse range of events, workshops, and initiatives, we strive to make a lasting impact on campus culture and provide opportunities for personal and professional development.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center transform hover:scale-105 transition-transform duration-200">
                <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
                <p className="text-gray-700 font-medium">Events Organized</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center transform hover:scale-105 transition-transform duration-200">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">1000+</h3>
                <p className="text-gray-700 font-medium">Active Members</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center transform hover:scale-105 transition-transform duration-200">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">25+</h3>
                <p className="text-gray-700 font-medium">Awards Won</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center transform hover:scale-105 transition-transform duration-200">
                <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">5+</h3>
                <p className="text-gray-700 font-medium">Years Active</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Gallery</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Moments captured from our memorable events</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-square bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl overflow-hidden group cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400/20 to-blue-600/20 group-hover:from-blue-500/30 group-hover:to-blue-700/30 transition-all duration-300">
                  <span className="text-6xl font-bold text-white/30">VMEDHA</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Join us in our exciting upcoming events</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Tech Summit 2025',
                date: 'March 15, 2025',
                description: 'Join us for an inspiring day of technology talks, workshops, and networking with industry leaders.',
              },
              {
                title: 'Cultural Fest',
                date: 'April 20, 2025',
                description: 'Experience the diversity of cultures through performances, exhibitions, and interactive activities.',
              },
              {
                title: 'Innovation Challenge',
                date: 'May 10, 2025',
                description: 'Showcase your innovative ideas and compete for exciting prizes in our annual hackathon event.',
              },
            ].map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Calendar className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{event.date}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{event.description}</p>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PR & Work Section */}
      <section id="pr-work" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">PR & Work</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Our collaborations, publications, and achievements</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaborations</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-700 leading-relaxed">Partnership with leading tech companies for workshops and mentorship programs</p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-700 leading-relaxed">Joint events with other student organizations to promote cross-cultural exchange</p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-700 leading-relaxed">Media coverage in regional newspapers and online platforms</p>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Achievements</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-700 leading-relaxed">Best Student Club Award 2024 at Inter-College Festival</p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-700 leading-relaxed">Featured in multiple educational journals and magazines</p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-700 leading-relaxed">Successfully organized 50+ events with over 10,000 participants</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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