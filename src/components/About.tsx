import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm Syed Muhammad Ali, a passionate Frontend Developer currently pursuing ADP in Software Engineering from Ilma University. 
            I have strong skills in modern web technologies and am dedicated to creating beautiful, responsive web applications.
            I have experience in HTML, CSS, JavaScript, React, Next.js and modern frontend frameworks. 
            Currently enrolled in a Full Stack / MERN Stack Development course at Saylani SMIT.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
