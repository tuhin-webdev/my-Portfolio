import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { User, Target, Code2, Coffee, Award, BookOpen, Heart, Zap } from 'lucide-react';

const highlights = [
  { icon: Code2, label: 'Clean Code', desc: 'Writing maintainable, scalable code' },
  { icon: Zap, label: 'Fast Delivery', desc: 'On-time project completion' },
  { icon: Award, label: 'Best Practices', desc: 'Industry-standard development' },
  { icon: Heart, label: 'Passion Driven', desc: 'Love what I do every day' },
];

const personalInfo = [
  { label: 'Name', value: 'MD HASAN' },
  { label: 'Role', value: 'Full Stack Developer' },
  { label: 'Location', value: 'Bangladesh 🇧🇩' },
  { label: 'Email', value: 'mdhasan@gmail.com' },
  { label: 'Languages', value: 'Bangla, English' },
  { label: 'Status', value: 'Available for Hire ✅' },
];

const FadeIn = ({ children, delay = 0, direction = 'up' }: { children: ReactNode; delay?: number; direction?: 'up' | 'left' | 'right' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : 0,
      x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default function About() {
  return (
    <section id="about" className="py-28 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 floating-orb opacity-50 orb-bg-green" />
        <div className="absolute bottom-20 left-10 w-60 h-60 floating-orb opacity-40 orb-bg-yellow" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-50 border border-lime-200/80 mb-6">
              <User className="w-3.5 h-3.5 text-lime-500" />
              <span className="text-xs font-semibold text-lime-700 tracking-wider uppercase">About Me</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Crafting Digital
              <span className="text-gradient"> Experiences</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              Passionate full stack developer dedicated to building beautiful, functional web applications.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left - Story */}
          <div className="space-y-8">
            <FadeIn direction="left">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lime hover:border-lime-100 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lime-400 to-yellow-400 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">My Story</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Hello! I'm <strong className="text-gray-900">MD SAHABUDDIN</strong>, a passionate Full Stack Developer from Bangladesh. My journey into programming began with curiosity about how websites work, which quickly transformed into a deep passion for building digital solutions.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.1}>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lime hover:border-lime-100 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lime-400 to-yellow-400 flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Career Objective</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To leverage my full stack development expertise to build innovative web applications that solve real-world problems, while continuously growing as a developer and contributing to meaningful projects that create positive impact.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lime hover:border-lime-100 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lime-400 to-yellow-400 flex items-center justify-center">
                    <Coffee className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Developer Journey</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  I started with HTML & CSS, then dived into JavaScript and React.js for frontend development. I expanded into backend with Node.js and Express, mastered MongoDB and MySQL databases, and now I build complete full stack applications — from pixel-perfect UIs to robust server-side APIs.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right - Info + Highlights */}
          <div className="space-y-8">
            <FadeIn direction="right">
              <div className="bg-gradient-to-br from-lime-50 to-yellow-50 rounded-3xl p-8 border border-lime-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Personal Info</h3>
                <div className="grid grid-cols-1 gap-4">
                  {personalInfo.map((item) => (
                    <div key={item.label} className="flex items-center justify-between py-3 border-b border-lime-100/60 last:border-0">
                      <span className="text-sm font-medium text-gray-500">{item.label}</span>
                      <span className="text-sm font-semibold text-gray-900">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lime hover:border-lime-100 transition-all duration-300 cursor-default"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lime-100 to-yellow-100 flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-lime-600" />
                    </div>
                    <p className="text-sm font-bold text-gray-900 mb-1">{item.label}</p>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </FadeIn>

            {/* Professional Summary */}
            <FadeIn direction="right" delay={0.25}>
              <div className="bg-gray-900 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 radial-overlay-topright" />
                <div className="relative">
                  <p className="text-3xl font-black mb-1">
                    <span className="text-gradient">1+</span>
                  </p>
                  <p className="text-gray-400 text-sm mb-4">Year of Experience</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Specializing in MERN Stack development with a strong foundation in modern web technologies, RESTful APIs, and database design. Building production-ready applications with focus on performance and UX.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
