import { 
  ArrowRight, 
  Clock3, 
  ShieldCheck, 
  Star, 
  Zap, 
  Smartphone, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  CheckCircle2,
  Menu,
  X,
  PlayCircle,
  Shield,
  CreditCard,
  Target
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LandingPage.css';
import rydonLogo from '../../../assets/rydon24_logo.png';
import heroImage from '../../../assets/driver_welcome_hero.png';
import mapGrid from '../../../assets/premium_grid_map.png';

const highlights = [
  { 
    title: 'Rides In Minutes', 
    detail: 'Smart dispatch pairs riders and nearby drivers in seconds for lightning-fast pickups.', 
    icon: Clock3,
    color: '#ea580c'
  },
  { 
    title: 'Built For Safety', 
    detail: 'Advanced trip monitoring, verified drivers, and SOS-ready support flows for your peace of mind.', 
    icon: ShieldCheck,
    color: '#0ea5e9'
  },
  { 
    title: 'Predictable Pricing', 
    detail: 'No hidden costs. Get transparent fare estimates and clear route-based billing every time.', 
    icon: Zap,
    color: '#8b5cf6'
  },
];

const services = [
  { title: 'City Rides', description: 'Quick and easy rides across the city.', icon: '🚗', delay: 0.1 },
  { title: 'Intercity', description: 'Comfortable long-distance travel between cities.', icon: '🏙️', delay: 0.2 },
  { title: 'Airport', description: 'Reliable airport transfers, on time, every time.', icon: '✈️', delay: 0.3 },
  { title: 'Parcel', description: 'Fast and secure delivery for your packages.', icon: '📦', delay: 0.4 },
  { title: 'Bike Rental', description: 'Flexible bike rentals for your daily commute.', icon: '🚲', delay: 0.5 },
  { title: 'Shared Cab', description: 'Eco-friendly and affordable shared rides.', icon: '👥', delay: 0.6 },
];

const stats = [
  { value: '2.4M+', label: 'Trips Completed' },
  { value: '99.2%', label: 'Fulfillment Rate' },
  { value: '4.9/5', label: 'Average Rating' },
  { value: '50k+', label: 'Active Drivers' },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Inline SVGs for social icons (Compatibility fix)
const TwitterIcon = () => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-2 1-3.3 1.1c-.8-.8-1.8-1.3-3-1.3-2.3 0-4.1 1.8-4.1 4.1 0 .3.03.6.1.9-3.5-.2-6.6-1.8-8.7-4.4-.3.5-.5 1.1-.5 1.8 0 1.4.7 2.7 1.8 3.4-.7-.02-1.3-.2-1.9-.5v.05c0 2 1.4 3.6 3.3 4-.3.1-.7.1-1.1.1-.3 0-.5-.03-.8-.1.5 1.7 2.1 2.9 4 3-1.5 1.1-3.3 1.8-5.3 1.8-.3 0-.7-.02-1-.06 1.9 1.2 4.1 2 6.5 2 7.8 0 12-6.5 12-12 0-.2 0-.4 0-.6C21 6.3 21.6 5.2 22 4z"></path></svg>;
const FacebookIcon = () => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const InstagramIcon = () => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const LinkedinIcon = () => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="landing-page">
      {/* Dynamic Background */}
      <div className="landing-background-glow landing-background-glow-one" />
      <div className="landing-background-glow landing-background-glow-two" />
      <div className="grid-overlay" />

      {/* Header */}
      <header className={`landing-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="landing-header-container">
          <motion.div 
            className="landing-brand"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <img src={rydonLogo} alt="Rydon24 Logo" className="landing-logo-img" />
            <span className="brand-text">Rydon24</span>
          </motion.div>
          
          <nav className="landing-nav-desktop">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#download">App</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="landing-header-actions">
            <div className="desktop-auth">
              <a href="/login" className="login-btn">Log In</a>
              <a href="/signup" className="signup-btn">Get Started</a>
            </div>
            <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                className="mobile-menu-overlay"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="mobile-nav-links">
                  <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
                  <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                  <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
                  <a href="#download" onClick={() => setIsMenuOpen(false)}>App</a>
                  <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
                </div>
                <div className="mobile-auth">
                  <a href="/login" className="login-btn">Log In</a>
                  <a href="/signup" className="signup-btn">Get Started</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <main className="landing-main-content">
        {/* Hero Section */}
        <section id="home" className="landing-hero-section">
          <div className="hero-container">
            <motion.div 
              className="hero-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="hero-badge">
                <span className="pulse"></span>
                The Future of Mobility is Here
              </motion.div>
              <motion.h1 variants={fadeIn} className="hero-title">
                Redefining How The <span className="text-gradient">World Moves</span>
              </motion.h1>
              <motion.p variants={fadeIn} className="hero-subtitle">
                Experience seamless transportation with Rydon24. From daily commutes to intercity travel, we provide safe, reliable, and affordable mobility solutions at your fingertips.
              </motion.p>
              <motion.div variants={fadeIn} className="hero-actions">
                <a href="/signup" className="btn-primary">
                  Book Your Ride <ArrowRight size={20} />
                </a>
                <a href="/user" className="btn-glass">
                  Explore Services <PlayCircle size={20} />
                </a>
              </motion.div>
              
              <motion.div variants={fadeIn} className="hero-trust">
                <div className="trust-group">
                  <div className="avatar-stack">
                    {[1,2,3,4].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/100?u=${i+10}`} alt="User" />
                    ))}
                    <div className="avatar-more">+50k</div>
                  </div>
                  <div className="trust-info">
                    <div className="stars-row">
                      {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#fbbf24" color="#fbbf24" />)}
                    </div>
                    <p>Over 2M+ Successful Trips</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="visual-wrapper">
                <div className="glow-ring" />
                <img src={heroImage} alt="Rydon24 App" className="hero-main-img" />
                
                {/* Floating Elements */}
                <motion.div 
                  className="floating-card c-1"
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Shield size={20} color="#10b981" />
                  <span>Verified Safe</span>
                </motion.div>
                <motion.div 
                  className="floating-card c-2"
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <CreditCard size={20} color="#3b82f6" />
                  <span>Secure Payments</span>
                </motion.div>
                <motion.div 
                  className="floating-card c-3"
                  animate={{ x: [0, 15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Target size={20} color="#f59e0b" />
                  <span>Fast Pickup</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="stats-strip">
          <div className="stats-container">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="stat-card-new"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h2 className="stat-count">{stat.value}</h2>
                <p className="stat-name">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section id="services" className="services-section">
          <div className="container">
            <div className="section-head">
              <span className="sub-tag">Our Expertise</span>
              <h2 className="section-title">Mobility Solutions for <span className="text-gradient">Every Need</span></h2>
            </div>
            <div className="services-grid-new">
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  className="service-item"
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: service.delay }}
                >
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-hover-link">Explore <ArrowRight size={16} /></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section - Modern Layout */}
        <section id="about" className="about-modern">
          <div className="container about-grid">
            <div className="about-visual">
              <div className="map-wrapper">
                <img src={mapGrid} alt="Network" className="map-img" />
                <div className="map-overlay" />
                <motion.div 
                  className="map-node n1"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="map-node n2"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </div>
            <div className="about-info">
              <span className="sub-tag">Why Rydon24?</span>
              <h2 className="section-title">Built for Efficiency, <span className="text-gradient">Designed for You</span></h2>
              <p className="about-desc">
                We've spent years perfecting the art of urban transit. Rydon24 uses cutting-edge AI to match you with the nearest drivers, ensuring minimal wait times and maximum safety.
              </p>
              <div className="about-features">
                <div className="feat-item">
                  <div className="feat-icon"><CheckCircle2 size={24} /></div>
                  <div>
                    <h4>Premium Fleet</h4>
                    <p>Only top-rated vehicles and highly trained professional drivers.</p>
                  </div>
                </div>
                <div className="feat-item">
                  <div className="feat-icon"><CheckCircle2 size={24} /></div>
                  <div>
                    <h4>Transparent Billing</h4>
                    <p>Know your fare upfront with zero hidden charges or surprises.</p>
                  </div>
                </div>
              </div>
              <button className="btn-primary">Learn More About Us</button>
            </div>
          </div>
        </section>

        {/* Download App Section */}
        <section id="download" className="download-pro">
          <div className="container download-inner">
            <div className="download-text">
              <h2 className="section-title text-white">Your Journey, <span className="text-primary">One Tap Away</span></h2>
              <p className="text-muted-light">
                Download the Rydon24 app today and join millions of happy travelers. Available on all major platforms.
              </p>
              <div className="store-buttons">
                <a href="#" className="store-btn">
                   <div className="store-icon">
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.66,14.05C20.44,13.01 20.44,10.99 18.66,9.95L16.81,8.88L14.4,11.29L16.81,15.12M4.54,2.15L14.4,12L15.12,12.72L12.71,15.13L4.54,21.85L4.54,2.15M14.4,12L16.81,9.59L15.12,11.28L14.4,12Z" /></svg>
                   </div>
                   <div className="store-info">
                      <span>GET IT ON</span>
                      <strong>Google Play</strong>
                   </div>
                </a>
                <a href="#" className="store-btn">
                   <div className="store-icon">
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" /></svg>
                   </div>
                   <div className="store-info">
                      <span>Download on the</span>
                      <strong>App Store</strong>
                   </div>
                </a>
              </div>
            </div>
            <div className="download-mockup">
               <motion.div 
                 className="mockup-container"
                 animate={{ rotateY: [0, 10, 0] }}
                 transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
               >
                  <div className="mockup-screen">
                     <img src={rydonLogo} alt="App" className="mockup-app-logo" />
                     <div className="mockup-text">Rydon24</div>
                  </div>
               </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-premium">
          <div className="container contact-box">
             <div className="contact-details">
                <h2 className="section-title">Let's <span className="text-gradient">Connect</span></h2>
                <p>Our team is available 24/7 to answer your queries and assist with your journeys.</p>
                
                <div className="contact-list-new">
                   <div className="c-item">
                      <div className="c-icon"><Mail size={20} /></div>
                      <div>
                         <h5>Email</h5>
                         <p>hello@rydon24.com</p>
                      </div>
                   </div>
                   <div className="c-item">
                      <div className="c-icon"><Phone size={20} /></div>
                      <div>
                         <h5>Support Line</h5>
                         <p>+1 (800) RYDON-24</p>
                      </div>
                   </div>
                </div>

                <div className="social-pill">
                   <a href="#"><TwitterIcon /></a>
                   <a href="#"><FacebookIcon /></a>
                   <a href="#"><InstagramIcon /></a>
                   <a href="#"><LinkedinIcon /></a>
                </div>
             </div>
             
             <div className="contact-form-premium">
                <form>
                   <div className="input-row">
                      <div className="input-field">
                         <label>Name</label>
                         <input type="text" placeholder="Your Name" />
                      </div>
                      <div className="input-field">
                         <label>Email</label>
                         <input type="email" placeholder="Email Address" />
                      </div>
                   </div>
                   <div className="input-field">
                      <label>Subject</label>
                      <select>
                         <option>General Inquiry</option>
                         <option>Support Request</option>
                         <option>Partnership</option>
                      </select>
                   </div>
                   <div className="input-field">
                      <label>Message</label>
                      <textarea placeholder="Write your message here..." rows="4"></textarea>
                   </div>
                   <button type="submit" className="btn-primary w-full">Send Message</button>
                </form>
             </div>
          </div>
        </section>
      </main>

      <footer className="footer-modern">
        <div className="container footer-grid">
           <div className="f-col-brand">
              <div className="f-logo">
                 <img src={rydonLogo} alt="Logo" />
                 <span>Rydon24</span>
              </div>
              <p>Making every journey safer, faster, and more enjoyable for everyone, everywhere.</p>
           </div>
           <div className="f-col-links">
              <div className="link-set">
                 <h5>Platform</h5>
                 <a href="#">Ride</a>
                 <a href="#">Drive</a>
                 <a href="#">Deliver</a>
                 <a href="#">Business</a>
              </div>
              <div className="link-set">
                 <h5>Company</h5>
                 <a href="#">About</a>
                 <a href="#">Safety</a>
                 <a href="#">Careers</a>
                 <a href="#">Blog</a>
              </div>
              <div className="link-set">
                 <h5>Legal</h5>
                 <a href="/terms">Terms</a>
                 <a href="/privacy">Privacy</a>
                 <a href="#">Support</a>
              </div>
           </div>
        </div>
        <div className="container footer-bottom-new">
           <p>&copy; {new Date().getFullYear()} Rydon24 Mobility Inc. Built with Passion.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
