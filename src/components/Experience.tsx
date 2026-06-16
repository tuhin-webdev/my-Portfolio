import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    icon: Briefcase,
    title: 'Full Stack Developer',
    company: 'Freelance / Remote',
    period: '2024 – Present',
    description: 'Building complete web applications for clients worldwide. Developing e-commerce platforms, dashboards, and business management systems using MERN stack.',
    skills: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
    color: 'lime',
  },
  {
    type: 'work',
    icon: Briefcase,
    title: 'Frontend Developer',
    company: 'Personal Projects',
    period: '2023 – 2024',
    description: 'Created multiple responsive web applications with modern UI/UX. Focused on React.js development, component architecture, and pixel-perfect implementations.',
    skills: ['React.js', 'JavaScript', 'CSS3', 'Bootstrap', 'HTML5'],
    color: 'yellow',
  },
  {
    type: 'education',
    icon: GraduationCap,
    title: 'Computer Science Studies',
    company: 'University / College',
    period: '2022 – Present',
    description: 'Studying Computer Science fundamentals, algorithms, data structures, software engineering principles, and modern web development technologies.',
    skills: ['Algorithms', 'Data Structures', 'OOP', 'Software Engineering'],
    color: 'lime',
  },
  {
    type: 'education',
    icon: GraduationCap,
    title: 'Web Development Bootcamp',
    company: 'Online Courses & Self-Learning',
    period: '2022 – 2023',
    description: 'Completed comprehensive web development courses covering full stack development with the MERN stack, REST API design, and modern JavaScript frameworks.',
    skills: ['JavaScript', 'React.js', 'Node.js', 'MongoDB', 'Git'],
    color: 'yellow',
  },
];



export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] floating-orb"
          style={{ background: 'radial-gradient(circle, rgba(163,230,53,0.05) 0%, transparent 70%)' }}
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
            <Briefcase className="w-3.5 h-3.5 text-lime-500" />
            <span className="text-xs font-semibold text-lime-700 tracking-wider uppercase">Experience</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            My
            <span className="text-gradient"> Journey</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            From learning fundamentals to building production-ready applications.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-lime-200 via-yellow-200 to-lime-200" />

          <div className="relative">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className={`flex items-center mb-12 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Card */}
                  <div className={`w-5/12 ${isLeft ? 'pr-10' : 'pl-10'}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-lime hover:border-lime-100 transition-all duration-400 group"
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-xl ${exp.color === 'lime' ? 'bg-gradient-to-br from-lime-400 to-green-400' : 'bg-gradient-to-br from-yellow-400 to-orange-400'} flex items-center justify-center shadow-sm flex-shrink-0`}>
                          <exp.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-gray-900 group-hover:text-lime-600 transition-colors">{exp.title}</h3>
                          <p className="text-sm font-medium text-gray-500">{exp.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 mb-3">
                        <Calendar className="w-3.5 h-3.5 text-lime-500" />
                        <span className="text-xs font-semibold text-lime-600 bg-lime-50 px-2.5 py-0.5 rounded-full border border-lime-100">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map((skill) => (
                          <span key={skill} className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-gray-50 text-gray-600 border border-gray-100">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Center dot */}
                  <div className="w-2/12 flex justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: i * 0.1 + 0.3, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="w-4 h-4 rounded-full bg-gradient-to-br from-lime-400 to-yellow-400 border-4 border-white shadow-lg shadow-lime-200/50 z-10"
                    />
                  </div>

                  <div className="w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-lime transition-all duration-400"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl ${exp.color === 'lime' ? 'bg-gradient-to-br from-lime-400 to-green-400' : 'bg-gradient-to-br from-yellow-400 to-orange-400'} flex items-center justify-center shadow-sm flex-shrink-0`}>
                  <exp.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">{exp.title}</h3>
                  <p className="text-sm font-medium text-gray-500">{exp.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 mb-3">
                <Calendar className="w-3.5 h-3.5 text-lime-500" />
                <span className="text-xs font-semibold text-lime-600 bg-lime-50 px-2.5 py-0.5 rounded-full border border-lime-100">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {exp.skills.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-gray-50 text-gray-600 border border-gray-100">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
