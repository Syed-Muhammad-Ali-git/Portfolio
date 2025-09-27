import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5', level: 95, icon: '🏗️' },
        { name: 'CSS3', level: 90, icon: '🎨' },
        { name: 'JavaScript (ES6)', level: 85, icon: '⚡' },
        { name: 'React.js', level: 80, icon: '⚛️' },
        { name: 'Tailwind CSS', level: 88, icon: '💨' },
        { name: 'Bootstrap', level: 85, icon: '📱' },
      ]
    },
    backend: {
      title: 'Backend & Tools',
      skills: [
        { name: 'Node.js', level: 75, icon: '🟢' },
        { name: 'GitHub', level: 85, icon: '🐙' },
        { name: 'MS Office', level: 90, icon: '📊' },
        { name: 'WordPress', level: 80, icon: '📝' },
      ]
    },
    learning: {
      title: 'Currently Learning',
      skills: [
        { name: 'MERN Stack', level: 70, icon: '🚀' },
        { name: 'MongoDB', level: 65, icon: '🍃' },
        { name: 'Express.js', level: 60, icon: '🚂' },
        { name: 'Full Stack Development', level: 68, icon: '🌐' },
      ]
    }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-transparent to-card/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 p-2 bg-card/50 rounded-full backdrop-blur-sm border border-border/50">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-primary text-primary-foreground shadow-glow'
                    : 'hover:bg-card/80 text-muted-foreground hover:text-foreground'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <div
                key={skill.name}
                className="portfolio-card group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                
                <div className="relative">
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out group-hover:shadow-glow"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-primary font-semibold">🎯 Goal:</span>
            <span>Become a Full Stack MERN Developer</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;