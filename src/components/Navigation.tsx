import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👨‍💻' },
    { id: 'skills', label: 'Skills', icon: '🚀' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'projects', label: 'Projects', icon: '📂' },
    { id: 'contact', label: 'Contact', icon: '📧' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-card/80 backdrop-blur-md border border-border/50 shadow-soft">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-pill flex items-center gap-2 ${
                activeSection === item.id ? 'active' : ''
              }`}
            >
              <span className="text-xs">{item.icon}</span>
              <span className="hidden lg:inline">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-3 rounded-full bg-card/80 backdrop-blur-md border border-border/50 shadow-soft"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {isMenuOpen && (
          <div className="absolute top-16 right-0 w-48 py-2 bg-card/95 backdrop-blur-md border border-border/50 rounded-xl shadow-intense">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-primary/10 transition-all duration-200 ${
                  activeSection === item.id ? 'text-primary bg-primary/5' : ''
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;