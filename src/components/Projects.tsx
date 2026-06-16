import { motion } from 'framer-motion';
import { ExternalLink, FolderOpen } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A fully-featured e-commerce platform with product catalog, shopping cart, secure payment gateway, order management, and admin panel. Built with MERN stack.',
    image: '/images/project-ecommerce.jpg',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
    badge: '🛒 Featured',
  },
  {
    id: 2,
    title: 'Admin Dashboard',
    description: 'A comprehensive admin dashboard with real-time analytics, data visualization, user management, role-based access control, and responsive design.',
    image: '/images/project-dashboard.jpg',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Chart.js', 'Bootstrap'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
    badge: '📊 Analytics',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A stunning personal portfolio website with modern animations, smooth transitions, responsive design, and an Awwwards-quality aesthetic.',
    image: '/images/project-portfolio.jpg',
    tags: ['React.js', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
    badge: '✨ Design',
  },
  {
    id: 4,
    title: 'Blog Platform',
    description: 'A modern blog platform with markdown support, rich text editor, user authentication, categories, tags, comments, and SEO optimization.',
    image: '/images/project-blog.jpg',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
    badge: '📝 Content',
  },
  {
    id: 5,
    title: 'Business Management System',
    description: 'An all-in-one business management solution with inventory tracking, CRM, invoicing, financial reports, and employee management modules.',
    image: '/images/project-business.jpg',
    tags: ['React.js', 'Express.js', 'MySQL', 'Node.js', 'Bootstrap'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
    badge: '💼 Business',
  },
  {
    id: 6,
    title: 'Full Stack Web Application',
    description: 'A scalable full stack SaaS application with user authentication, subscription billing, real-time features, and a modern, intuitive user interface.',
    image: '/images/project-fullstack.jpg',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
    badge: '🚀 SaaS',
  },
];

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-gray-50/50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] floating-orb"
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
            <FolderOpen className="w-3.5 h-3.5 text-lime-500" />
            <span className="text-xs font-semibold text-lime-700 tracking-wider uppercase">Portfolio</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Featured
            <span className="text-gradient"> Projects</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            A showcase of my best work — from concept to deployment.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lime-lg hover:border-lime-100 transition-all duration-500 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-gray-800 shadow-sm border border-white/60">
                    {project.badge}
                  </span>
                </div>

                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-800 shadow-lg hover:bg-white transition-all"
                  >
                    <GitHubIcon />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-lime-400 to-yellow-400 flex items-center justify-center text-white shadow-lg transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-lime-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-gray-50 text-gray-600 border border-gray-100 hover:bg-lime-50 hover:text-lime-700 hover:border-lime-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-xl text-xs font-semibold text-gray-700 bg-gray-50 border border-gray-100 hover:bg-gray-100 transition-all flex items-center justify-center gap-1.5"
                  >
                    <GitHubIcon />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-lime-400 to-yellow-400 shadow-sm hover:shadow-lime transition-all flex items-center justify-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-gray-700 bg-white border-2 border-gray-100 shadow-sm hover:border-lime-200 hover:shadow-lime transition-all duration-300"
          >
            <GitHubIcon />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
