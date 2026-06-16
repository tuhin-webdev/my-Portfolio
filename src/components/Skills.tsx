import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layers } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    emoji: '🎨',
    color: 'from-lime-400 to-green-400',
    bgColor: 'from-lime-50 to-green-50',
    borderColor: 'border-lime-100',
    skills: [
      { name: 'HTML5', icon: '🌐', level: 92 },
      { name: 'CSS3', icon: '🎨', level: 88 },
      { name: 'JavaScript', icon: '⚡', level: 85 },
      { name: 'React.js', icon: '⚛️', level: 82 },
      { name: 'Next.js', icon: '▲', level: 75 },
      { name: 'Tailwind CSS', icon: '🌊', level: 90 },
      { name: 'Bootstrap', icon: '🅱️', level: 85 },
    ],
  },
  {
    title: 'Backend',
    emoji: '⚙️',
    color: 'from-yellow-400 to-orange-400',
    bgColor: 'from-yellow-50 to-orange-50',
    borderColor: 'border-yellow-100',
    skills: [
      { name: 'Node.js', icon: '🟢', level: 78 },
      { name: 'Express.js', icon: '🚂', level: 75 },
      { name: 'REST API', icon: '🔌', level: 80 },
    ],
  },
  {
    title: 'Database',
    emoji: '🗄️',
    color: 'from-emerald-400 to-teal-400',
    bgColor: 'from-emerald-50 to-teal-50',
    borderColor: 'border-emerald-100',
    skills: [
      { name: 'MongoDB', icon: '🍃', level: 78 },
      { name: 'MySQL', icon: '🐬', level: 72 },
    ],
  },
  {
    title: 'Tools',
    emoji: '🛠️',
    color: 'from-purple-400 to-pink-400',
    bgColor: 'from-purple-50 to-pink-50',
    borderColor: 'border-purple-100',
    skills: [
      { name: 'Git', icon: '🌿', level: 82 },
      { name: 'GitHub', icon: '🐙', level: 85 },
      { name: 'VS Code', icon: '💻', level: 95 },
      { name: 'Postman', icon: '📮', level: 78 },
      { name: 'Figma', icon: '🎭', level: 65 },
    ],
  },
];

const SkillBar = ({ skill, delay }: { skill: { name: string; icon: string; level: number }; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="space-y-1.5"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-base">{skill.icon}</span>
          <span className="text-sm font-semibold text-gray-800">{skill.name}</span>
        </div>
        <span className="text-xs font-bold text-gray-500">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-lime-400 to-yellow-400"
        />
      </div>
    </motion.div>
  );
};

const techTags = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS',
  'Bootstrap', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'REST API', 'Git',
  'GitHub', 'VS Code', 'Postman', 'Figma', 'Vercel', 'Netlify',
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] floating-orb"
          style={{ background: 'radial-gradient(ellipse, rgba(163,230,53,0.06) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-50 border border-lime-200/80 mb-6">
            <Layers className="w-3.5 h-3.5 text-lime-500" />
            <span className="text-xs font-semibold text-lime-700 tracking-wider uppercase">Tech Stack</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Skills &
            <span className="text-gradient"> Expertise</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Technologies I use to bring ideas to life with precision and passion.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIdx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className={`bg-gradient-to-br ${category.bgColor} rounded-3xl p-6 border ${category.borderColor} hover:shadow-lime transition-all duration-400`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-sm`}>
                  <span className="text-lg">{category.emoji}</span>
                </div>
                <h3 className="text-base font-bold text-gray-900">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    delay={catIdx * 0.1 + skillIdx * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee Tech Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="overflow-hidden"
        >
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-gray-400 tracking-widest uppercase">All Technologies</p>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...techTags, ...techTags].map((tag, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 mx-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm text-sm font-medium text-gray-600 whitespace-nowrap hover:border-lime-300 hover:text-lime-700 transition-colors"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
