import { motion } from 'framer-motion';
import { Star, Quote, MessageSquare } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'CEO, TechStartup BD',
    avatar: '👨‍💼',
    rating: 5,
    text: "MD HASAN delivered an exceptional e-commerce platform that exceeded all our expectations. His attention to detail, clean code, and professional communication made the entire process seamless. Highly recommended!",
    project: 'E-Commerce Platform',
    location: 'Dhaka, Bangladesh',
  },
  {
    name: 'Sarah Johnson',
    role: 'Product Manager, DigitalWave',
    avatar: '👩‍💻',
    rating: 5,
    text: "Working with HASAN was an absolute pleasure. He built a beautiful dashboard that transformed how we visualize our data. Fast delivery, perfect quality, and outstanding support. Will definitely work with him again.",
    project: 'Admin Dashboard',
    location: 'London, UK',
  },
  {
    name: 'Ahmed Al-Rashid',
    role: 'Founder, BusinessFlow',
    avatar: '👨‍🚀',
    rating: 5,
    text: "HASAN created a complete business management system for us. The system is robust, scalable, and easy to use. He understood our requirements perfectly and delivered exactly what we needed. Five stars!",
    project: 'Business Management System',
    location: 'Dubai, UAE',
  },
  {
    name: 'Emily Chen',
    role: 'Head of Marketing, ContentPro',
    avatar: '👩‍🎨',
    rating: 5,
    text: "The blog platform HASAN built for us is stunning! Perfect UI, fast performance, and an amazing admin panel. He's truly a talented developer who goes above and beyond for his clients.",
    project: 'Blog Platform',
    location: 'Singapore',
  },
  {
    name: 'Mohammad Karim',
    role: 'CTO, DevAgency BD',
    avatar: '🧑‍💻',
    rating: 5,
    text: "I've worked with many developers but HASAN stands out for his technical skills and professional approach. He delivered a full-stack application on time with clean, well-documented code. Exceptional talent!",
    project: 'Full Stack Application',
    location: 'Chittagong, Bangladesh',
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 right-0 w-[400px] h-[400px] floating-orb"
          style={{ background: 'radial-gradient(circle, rgba(250,204,21,0.08) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[300px] h-[300px] floating-orb"
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
            <MessageSquare className="w-3.5 h-3.5 text-lime-500" />
            <span className="text-xs font-semibold text-lime-700 tracking-wider uppercase">Testimonials</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Client
            <span className="text-gradient"> Stories</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            What clients say about working with me.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className={`bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-lime hover:border-lime-100 transition-all duration-400 flex flex-col ${i === 0 ? 'md:col-span-2 xl:col-span-1' : ''}`}
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lime-100 to-yellow-100 flex items-center justify-center mb-5">
                <Quote className="w-5 h-5 text-lime-600" />
              </div>

              {/* Stars */}
              <div className="mb-4">
                <StarRating count={t.rating} />
              </div>

              {/* Text */}
              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-5 italic">
                "{t.text}"
              </p>

              {/* Project tag */}
              <div className="mb-5">
                <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-lime-50 text-lime-700 border border-lime-100">
                  {t.project}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lime-100 to-yellow-100 flex items-center justify-center text-xl">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                  <p className="text-xs text-gray-400">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-xl mx-auto"
        >
          {[
            { value: '20+', label: 'Happy Clients' },
            { value: '5.0', label: 'Average Rating' },
            { value: '100%', label: 'Satisfaction Rate' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-5 rounded-2xl bg-gradient-to-br from-lime-50 to-yellow-50 border border-lime-100">
              <p className="text-2xl font-black text-gray-900">{stat.value}</p>
              <p className="text-xs font-medium text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
