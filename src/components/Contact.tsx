import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Facebook,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        "service_kp1fa2q",
        "template_4fyfzcg",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "syeadmuhammedalimazhar@gmail.com",
        },
        "d0bLEGeyZy4Rc4SI7"
      );
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "syeadmuhammedalimazhar@gmail.com",
      href: "mailto:syeadmuhammedalimazhar@gmail.com",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Karachi, Pakistan",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/Syed-Muhammad-Ali-git?tab=repositories",
      color: "hover:text-gray-400",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/syed-muhammed-ali/",
      color: "hover:text-blue-400",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      label: "Facebook",
      href: "https://web.facebook.com/ali.mazhar.272106",
      color: "hover:text-blue-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-10 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8 bg-gradient-to-b from-transparent to-card/20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your next project or just say hello!
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-2">
          {/* Left: Info */}
          <div className="flex flex-col gap-8 min-w-0 animate-slide-up">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Let's start a conversation
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                I'm always interested in hearing about new opportunities,
                whether that's a project, a job opportunity, or just a chat
                about technology. Feel free to reach out through any of the
                channels below.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 sm:p-4 portfolio-card animate-bounce-in text-sm sm:text-base"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {info.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 break-words"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4">
                Follow me on social media
              </h4>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg bg-card/50 hover:bg-primary/20 transition-all duration-300 hover:scale-110 ${social.color}`}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick response */}
            <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 text-sm sm:text-base">
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold text-primary mb-1">
                    Quick Response
                  </p>
                  <p className="text-muted-foreground">
                    I typically respond to messages within 24 hours. For urgent
                    matters, feel free to reach out on LinkedIn.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="min-w-0 animate-slide-up [animation-delay:0.3s]">
            <form onSubmit={handleSubmit} className="portfolio-card space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-3 sm:px-4 rounded-lg bg-input border border-border 
                      focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none 
                      transition-all duration-300 text-sm sm:text-base"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-3 sm:px-4 rounded-lg bg-input border border-border 
                      focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none 
                      transition-all duration-300 text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 sm:px-4 rounded-lg bg-input border border-border 
                    focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none 
                    transition-all duration-300 text-sm sm:text-base"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-3 py-3 sm:px-4 rounded-lg bg-input border border-border 
                    focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none 
                    transition-all duration-300 resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 sm:px-6 
                  bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/80 
                  transition-all duration-300 hover:shadow-glow disabled:opacity-50 
                  disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="sm:w-5 sm:h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
