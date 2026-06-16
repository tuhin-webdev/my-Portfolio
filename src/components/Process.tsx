import { motion } from 'framer-motion';
import { Search, Palette, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discover',
    description: 'Understanding your goals, requirements, target audience, and project scope through in-depth discovery sessions.',
    color: 'from-lime-400 to-green-400',
    details: ['Requirements Analysis', 'User Research', 'Goal Setting', 'Scope Definition'],
  },
  {
    number: '02',
    icon: Palette,
    title: 'Design',
    description: 'Creating wireframes, prototypes, and high-fidelity designs that align with your brand and deliver exceptional UX.',
    color: 'from-yellow-400 to-orange-400',
    details: ['Wireframing', 'UI/UX Design', 'Prototyping', 'Design System'],
  },
  {
    number: '03',
    icon: Code2,
    title: 'Develop',
    description: 'Building your application with clean, maintainable code, following best practices and modern development workflows.',
    color: 'from-emerald-400 to-teal-400',
    details: ['Frontend Dev', 'Backend Dev', 'API Integration', 'Testing'],
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Deploy',
    description: 'Launching your product with CI/CD pipelines, performance monitoring, and ongoing maintenance and support.',
    color: 'from-purple-400 to-pink-400',
    details: ['CI/CD Pipeline', 'Performance Tuning', 'Monitoring', 'Support'],
  },
];

export default function Process() {
  return (
    <section className="py-28 bg-gray-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] floating-orb"
          style={{ background: 'radial-gradient(circle, rgba(163,230,53,0.1) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] floating-orb"
          style={{ background: 'radial-gradient(circle, rgba(250,204,21,0.07) 0%, transparent 70%)' }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-400/10 border border-lime-400/30 mb-6">
            <Rocket className="w-3.5 h-3.5 text-lime-400" />
            <span className="text-xs font-semibold text-lime-400 tracking-wider uppercase">Process</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            How I
            <span className="text-gradient"> Work</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            A structured, transparent workflow from concept to deployment.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden xl:block absolute top-14 left-full w-full h-0.5 bg-gradient-to-r from-lime-400/30 to-transparent z-0" />
              )}

              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-7 hover:bg-white/8 hover:border-lime-400/30 transition-all duration-400 overflow-hidden"
              >
                {/* Number */}
                <div className="flex items-start justify-between mb-6">
                  <span
                    className="text-5xl font-black text-transparent bg-clip-text"
                    style={{
                      backgroundImage: `linear-gradient(135deg, rgba(163,230,53,0.2), rgba(250,204,21,0.1))`,
                      WebkitBackgroundClip: 'text',
                    }}
                  >
                    {step.number}
                  </span>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lime-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-5">
                  {step.description}
                </p>

                {/* Details */}
                <div className="space-y-2">
                  {step.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color}`} />
                      <span className="text-xs text-gray-500">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Hover glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-400 rounded-3xl`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
