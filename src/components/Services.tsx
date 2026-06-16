import { motion } from 'framer-motion';
import { Globe, Layout, Server, Plug, Database, Zap } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Full Stack Development',
    description: 'End-to-end web application development covering everything from database design to beautiful, responsive frontends.',
    features: ['MERN Stack', 'Full API Integration', 'Database Design', 'Deployment'],
    gradient: 'from-lime-400 to-green-500',
    bg: 'from-lime-50 to-green-50',
    border: 'border-lime-100',
    featured: true,
  },
  {
    icon: Layout,
    title: 'Frontend Development',
    description: 'Pixel-perfect, responsive UI/UX implementations with modern frameworks, smooth animations, and exceptional user experiences.',
    features: ['React.js / Next.js', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
    gradient: 'from-yellow-400 to-orange-400',
    bg: 'from-yellow-50 to-orange-50',
    border: 'border-yellow-100',
    featured: false,
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Scalable server-side applications with robust architecture, security best practices, and efficient data processing.',
    features: ['Node.js / Express', 'Authentication', 'Middleware', 'Error Handling'],
    gradient: 'from-emerald-400 to-teal-500',
    bg: 'from-emerald-50 to-teal-50',
    border: 'border-emerald-100',
    featured: false,
  },
  {
    icon: Plug,
    title: 'API Development',
    description: 'RESTful API design and development with proper documentation, authentication, rate limiting, and data validation.',
    features: ['REST API Design', 'JWT Auth', 'Rate Limiting', 'API Docs'],
    gradient: 'from-purple-400 to-pink-400',
    bg: 'from-purple-50 to-pink-50',
    border: 'border-purple-100',
    featured: false,
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Efficient database architecture, schema design, query optimization, and data modeling for MongoDB and MySQL.',
    features: ['MongoDB', 'MySQL', 'Schema Design', 'Query Optimization'],
    gradient: 'from-blue-400 to-cyan-400',
    bg: 'from-blue-50 to-cyan-50',
    border: 'border-blue-100',
    featured: false,
  },
  {
    icon: Zap,
    title: 'Website Optimization',
    description: 'Performance tuning, Core Web Vitals optimization, SEO improvements, and achieving lightning-fast load times.',
    features: ['Performance Audit', 'Core Web Vitals', 'SEO', 'Caching'],
    gradient: 'from-red-400 to-rose-400',
    bg: 'from-red-50 to-rose-50',
    border: 'border-red-100',
    featured: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-gray-50/50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] floating-orb"
          style={{ background: 'radial-gradient(circle, rgba(163,230,53,0.07) 0%, transparent 70%)' }}
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
            <Zap className="w-3.5 h-3.5 text-lime-500" />
            <span className="text-xs font-semibold text-lime-700 tracking-wider uppercase">Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            What I
            <span className="text-gradient"> Offer</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Comprehensive development services tailored to bring your ideas to life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className={`relative bg-white rounded-3xl p-7 border ${service.border} shadow-sm hover:shadow-lime hover:border-lime-100 transition-all duration-400 overflow-hidden group ${service.featured ? 'md:col-span-2 xl:col-span-1' : ''}`}
            >
              {/* Bg gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.bg} opacity-0 group-hover:opacity-60 transition-opacity duration-400`}
              />

              <div className="relative">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-lime-700 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} flex-shrink-0`} />
                      <span className="text-xs font-medium text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="mt-6 flex items-center gap-1 text-lime-600 text-sm font-semibold"
                >
                  Learn more →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
