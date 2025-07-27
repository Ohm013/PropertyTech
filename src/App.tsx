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
    },
    {
      icon: Zap,
      title: "General Electrical",
      description: "Complete electrical repairs, installations, and upgrades"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-medium text-text">
              Property Tech Management
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-text hover:text-accent transition-colors">Services</a>
              <a href="#contact" className="text-text hover:text-accent transition-colors">Contact</a>
              <a href="#contact" className="bg-accent text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
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
              <a href="#services" className="block text-text">Services</a>
              <a href="#contact" className="block text-text">Contact</a>
              <a href="#contact" className="block bg-accent text-white px-4 py-2 rounded-md text-center">
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
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-sm text-gray-500">Houston, Texas</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-light text-text mb-6 leading-tight">
            <span className="text-accent">Modern</span> Property
            <span className="block font-medium">Technology</span>
          </h1>
          
          <div className="text-2xl font-medium text-accent mb-4">
            "Anything Electrical"
          </div>
          
          <p className="text-xl text-text mb-12 max-w-2xl mx-auto leading-relaxed">
            Complete electrical services, repairs, and installations. If it's electrical, we can fix it or install it.
          </p>
          
          <a href="#contact" className="inline-flex items-center bg-accent text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors group">
            Start Project
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-text mb-4">
              Our <span className="text-accent">Services</span>
            </h2>
            <p className="text-text/70 mb-8">
              From simple repairs to complex installations - if it's electrical, we handle it
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg hover:shadow-sm transition-all hover:border-accent/20 border border-transparent">
                <service.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-lg font-medium text-text mb-3">{service.title}</h3>
                <p className="text-text/70 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-white p-8 rounded-lg border border-accent/20">
              <h3 className="text-xl font-medium text-text mb-4">Complete Electrical Services</h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm text-text/70">
                <div className="space-y-2">
                  <div className="font-medium text-text">Installations</div>
                  <div>Outlets & Switches</div>
                  <div>Ceiling Fans</div>
                  <div>Light Fixtures</div>
                  <div>Panel Upgrades</div>
                  <div>Circuit Installation</div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium text-text">Repairs</div>
                  <div>Troubleshooting</div>
                  <div>Wiring Issues</div>
                  <div>Electrical Faults</div>
                  <div>Code Violations</div>
                  <div>Safety Inspections</div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium text-text">Specialty Work</div>
                  <div>Smart Home Integration</div>
                  <div>Outdoor Lighting</div>
                  <div>Commercial Projects</div>
                </div>
              </div>
              <div className="mt-6 text-accent font-medium">
                Don't see your project listed? Contact us - we handle all electrical work!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light text-text mb-6">
                Licensed electrical contractors with expertise in all electrical work
              </h2>
              <p className="text-text/70 mb-6 leading-relaxed">
                From basic electrical repairs to complex smart home installations, we handle every type of electrical project. Our motto "Anything Electrical" means exactly that - if it involves electricity, we can fix it, install it, or upgrade it.
              </p>
              <div className="flex items-center space-x-8">
                <div>
                  <div className="text-2xl font-medium text-accent">500+</div>
                  <div className="text-sm text-gray-500">Installations</div>
                </div>
                <div>
                  <div className="text-2xl font-medium text-accent">10+</div>
                  <div className="text-sm text-gray-500">Years</div>
                </div>
              </div>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-medium text-text mb-4">Service Areas</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-text/70">
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
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-text mb-4">
              Get <span className="text-accent">Started</span>
            </h2>
            <p className="text-text/70">Contact us for a consultation and quote</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Phone className="w-5 h-5 text-accent mt-1" />
                <div>
                  <div className="font-medium text-text">(832) 330-3164</div>
                  <div className="text-sm text-gray-500">Available 24/7</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 text-accent mt-1" />
                <div>
                  <div className="font-medium text-text">hnbmeh@att.net</div>
                  <div className="text-sm text-gray-500">Response within 24 hours</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <div>
                  <div className="font-medium text-text">Greater Houston Area</div>
                  <div className="text-sm text-gray-500">Licensed & Insured</div>
                </div>
              </div>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First name"
                  className="px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-accent transition-colors bg-white text-text"
                />
                <input 
                  type="text" 
                  placeholder="Last name"
                  className="px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-accent transition-colors bg-white text-text"
                />
              </div>
              
              <input 
                type="email" 
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-accent transition-colors bg-white text-text"
              />
              
              <input 
                type="tel" 
                placeholder="Phone"
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-accent transition-colors bg-white text-text"
              />
              
              <select className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-accent transition-colors text-text bg-white">
                <option value="">Select service</option>
                <option>Security Systems</option>
                <option>EV Charging</option>
                <option>Smart Lighting</option>
                <option>Network Setup</option>
                <option>Data Cabling</option>
                <option>Electrical Repair</option>
                <option>Outlet/Switch Installation</option>
                <option>Ceiling Fan Installation</option>
                <option>Panel Upgrade</option>
                <option>Other Electrical Work</option>
              </select>
              
              <textarea 
                rows={4} 
                placeholder="Project details"
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-accent transition-colors resize-none bg-white text-text"
              ></textarea>
              
              <button 
                type="submit" 
                className="w-full bg-accent text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
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
            <div className="text-text font-medium mb-4 md:mb-0">
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