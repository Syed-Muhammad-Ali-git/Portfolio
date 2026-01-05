import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    institution: 'Ilma University',
    degree: 'ADP Software Engineering',
    period: '2023 - Present',
    description: 'Currently pursuing Associate Degree Program in Software Engineering with focus on modern development practices, programming fundamentals, and software design principles.',
    current: true,
  },
  {
    institution: 'Government Degree Boys College',
    degree: 'Intermediate (Pre-Engineering)',
    period: '2021 - 2023',
    description: 'Completed Intermediate in Pre-Engineering with strong foundation in Mathematics, Physics, and Chemistry.',
    current: false,
  },
];

const certifications = [
  {
    title: 'Full Stack / MERN Stack Development',
    institution: 'Saylani SMIT',
    period: '2024 - Present',
    inProgress: true,
  },
  {
    title: 'Frontend Development',
    institution: 'Self-Taught',
    period: '2022 - Present',
    inProgress: true,
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-20 sm:py-32 bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {/* Formal Education */}
          {education.map((item, index) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="project-card p-6 flex gap-4"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary h-fit">
                <GraduationCap size={24} />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-1">
                      {item.degree}
                    </h3>
                    <p className="text-primary font-medium">{item.institution}</p>
                  </div>
                  {item.current && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-500/10 text-green-500">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1 mb-3">{item.period}</p>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-8"
          >
            <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-primary" />
              Certifications & Courses
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="project-card p-5 flex gap-4"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary h-fit">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold mb-1">{cert.title}</h4>
                    <p className="text-sm text-primary">{cert.institution}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs text-muted-foreground">{cert.period}</span>
                      {cert.inProgress && (
                        <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary">
                          In Progress
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
