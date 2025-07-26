import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Camera, 
  Zap, 
  Lightbulb, 
  Wifi, 
  Cable, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: Camera,
      title: "Security Systems",
      description: "Professional camera installation and monitoring setup"
    },
    {
      icon: Zap,
      title: "EV Charging",
      description: "Tesla and electric vehicle charging station installation"
    },
    {
      icon: Lightbulb,
      title: "Smart Lighting",
      description: "Automated lighting systems and smart controls"
    },
    {
      icon: Wifi,
      title: "Network Setup",
      description: "WiFi and ethernet infrastructure installation"
    },
    {
      icon: Cable,
      title: "Data Cabling",
      description: "Structured cabling and telecommunications wiring"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-medium text-gray-900">
              Property Tech Management
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
              <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Get Quote
              </a>
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-6 py-4 space-y-3">
              <a href="#services" className="block text-gray-600">Services</a>
              <a href="#contact" className="block text-gray-600">Contact</a>
              <a href="#contact" className="block bg-blue-600 text-white px-4 py-2 rounded-md text-center">
                Get Quote
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <MapPin className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-gray-500">Houston, Texas</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
            <span className="text-blue-600">Modern</span> Property
            <span className="block font-medium">Technology</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Professional electrical and network installations for contemporary properties
          </p>
          
          <a href="#contact" className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors group">
            Start Project
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Our <span className="text-blue-600">Services</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg hover:shadow-sm transition-all hover:border-blue-100 border border-transparent">
                <service.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Licensed electrical contractors specializing in modern property technology
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We provide professional installation services for security systems, electric vehicle charging, smart lighting, and network infrastructure throughout the Greater Houston area.
              </p>
              <div className="flex items-center space-x-8">
                <div>
                  <div className="text-2xl font-medium text-blue-600">500+</div>
                  <div className="text-sm text-gray-500">Installations</div>
                </div>
                <div>
                  <div className="text-2xl font-medium text-blue-600">10+</div>
                  <div className="text-sm text-gray-500">Years</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-4">Service Areas</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                <div>Houston</div>
                <div>Sugar Land</div>
                <div>The Woodlands</div>
                <div>Katy</div>
                <div>Pearland</div>
                <div>Spring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Get <span className="text-blue-600">Started</span>
            </h2>
            <p className="text-gray-600">Contact us for a consultation and quote</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Phone className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <div className="font-medium text-gray-900">(713) 555-0123</div>
                  <div className="text-sm text-gray-500">Available 24/7</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <div className="font-medium text-gray-900">info@propertytechmanagement.com</div>
                  <div className="text-sm text-gray-500">Response within 24 hours</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <div className="font-medium text-gray-900">Greater Houston Area</div>
                  <div className="text-sm text-gray-500">Licensed & Insured</div>
                </div>
              </div>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First name"
                  className="px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="Last name"
                  className="px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              
              <input 
                type="email" 
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
              />
              
              <input 
                type="tel" 
                placeholder="Phone"
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
              />
              
              <select className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors text-gray-900">
                <option value="">Select service</option>
                <option>Security Systems</option>
                <option>EV Charging</option>
                <option>Smart Lighting</option>
                <option>Network Setup</option>
                <option>Data Cabling</option>
              </select>
              
              <textarea 
                rows={4} 
                placeholder="Project details"
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors resize-none"
              ></textarea>
              
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-900 font-medium mb-4 md:mb-0">
              Property Tech Management
            </div>
            <div className="text-sm text-gray-500">
              © 2025 Property Tech Management. Licensed & Insured.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;