import { motion } from 'framer-motion';
import { ArrowDown, Mail, Sparkles, Download } from 'lucide-react';

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:mdhasan@gmail.com',
    icon: <Mail className="w-4 h-4" />,
  },
];

const stats = [
  { value: '20+', label: 'Projects' },
  { value: '15+', label: 'Tech Stack' },
  { value: '1+', label: 'Years Exp.' },
  { value: '100%', label: 'Dedication' },
];

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white flex items-center"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] floating-orb"
          style={{ background: 'radial-gradient(circle, rgba(163,230,53,0.18) 0%, rgba(250,204,21,0.08) 60%, transparent 80%)' }}
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] floating-orb"
          style={{ background: 'radial-gradient(circle, rgba(163,230,53,0.14) 0%, rgba(134,239,172,0.06) 60%, transparent 80%)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-[30%] left-[40%] w-[300px] h-[300px] floating-orb"
          style={{ background: 'radial-gradient(circle, rgba(250,204,21,0.12) 0%, transparent 70%)' }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-lime-50 to-yellow-50 border border-lime-200/80 mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 text-lime-500" />
              <span className="text-xs font-semibold text-lime-700 tracking-wider uppercase">Available for Work</span>
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6"
            >
              <h1 className="font-bold text-gray-900 leading-[1.05] tracking-tight">
                <span className="block text-5xl lg:text-6xl xl:text-7xl mb-2">Hi, I'm</span>
                <span className="block text-5xl lg:text-6xl xl:text-7xl text-gradient font-black">MD HASAN</span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-0.5 w-8 bg-gradient-to-r from-lime-400 to-yellow-400 rounded-full" />
              <span className="text-lg lg:text-xl font-semibold text-gray-500 tracking-wide">
                Full Stack Developer
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-base lg:text-lg text-gray-500 leading-relaxed mb-10 max-w-lg"
            >
              I build modern, scalable, high-performance web applications with exceptional user experiences. Passionate about clean code and innovative design.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.button
                onClick={() => scrollTo('#projects')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-lime-400 to-yellow-400 shadow-lg shadow-lime-200/60 hover:shadow-lime-300/80 transition-all duration-300 flex items-center gap-2"
              >
                View Projects
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  →
                </motion.span>
              </motion.button>
              <motion.button
                onClick={() => scrollTo('#contact')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-2xl font-semibold text-gray-800 bg-white border-2 border-gray-100 shadow-sm hover:border-lime-200 hover:shadow-lime-100 transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-2xl font-semibold text-gray-600 bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Resume
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4"
            >
              <span className="text-xs font-medium text-gray-400 tracking-wider uppercase">Follow Me</span>
              <div className="h-px w-8 bg-gray-200" />
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-lime-600 hover:bg-lime-50 hover:border-lime-200 transition-all duration-300"
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right - Photo */}
          <div className="order-1 lg:order-2 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Outer glow */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-20px] rounded-full opacity-40"
                style={{
                  background: 'conic-gradient(from 0deg, #a3e635, #facc15, #86efac, #a3e635)',
                  filter: 'blur(20px)',
                }}
              />

              {/* Dashed ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-10px] rounded-full border-2 border-dashed border-lime-200/60"
              />

              {/* Photo container */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
              >
                {/* Bg circle */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-lime-100 via-yellow-50 to-lime-100" />

                {/* Photo */}
                <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-lime-100/60 animate-pulse-glow">
                  <img
                    src="/images/hasan-photo.png"
                    alt="MD HASAN - Full Stack Developer"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center top' }}
                  />
                </div>

                {/* Floating badge - React */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-4 -right-6 glass bg-white/90 border border-gray-100 rounded-2xl px-3 py-2 shadow-lg flex items-center gap-2"
                >
                  <span className="text-lg">⚛️</span>
                  <div>
                    <p className="text-xs font-bold text-gray-800">React.js</p>
                    <p className="text-[10px] text-gray-400">Frontend</p>
                  </div>
                </motion.div>

                {/* Floating badge - Node */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute bottom-8 -left-6 glass bg-white/90 border border-gray-100 rounded-2xl px-3 py-2 shadow-lg flex items-center gap-2"
                >
                  <span className="text-lg">🟢</span>
                  <div>
                    <p className="text-xs font-bold text-gray-800">Node.js</p>
                    <p className="text-[10px] text-gray-400">Backend</p>
                  </div>
                </motion.div>

                {/* Floating badge - MongoDB */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -bottom-4 right-4 glass bg-white/90 border border-gray-100 rounded-2xl px-3 py-2 shadow-lg flex items-center gap-2"
                >
                  <span className="text-lg">🍃</span>
                  <div>
                    <p className="text-xs font-bold text-gray-800">MongoDB</p>
                    <p className="text-[10px] text-gray-400">Database</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-4 gap-3 mt-14 w-full max-w-sm"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                  className="text-center p-3 rounded-2xl bg-gradient-to-br from-lime-50 to-yellow-50 border border-lime-100"
                >
                  <p className="text-lg font-black text-gray-900">{stat.value}</p>
                  <p className="text-[9px] font-medium text-gray-500 leading-tight mt-0.5">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2 cursor-pointer mt-16"
          onClick={() => scrollTo('#about')}
        >
          <span className="text-xs font-medium text-gray-400 tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown className="w-4 h-4 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
