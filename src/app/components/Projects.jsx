import React from 'react'

const projects = [
  {
    img: '/E-Commerce Platform.png',
    category: 'MERN Stack + Admin Dashboard',
    title: 'E-Commerce Platform',
    description: 'Full-stack eCommerce system with user and admin roles. Built admin dashboard for product, order, and user management. Includes Stripe payment, cart, checkout, and role-based access control.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
    link: 'https://ecommerce-oe3k.vercel.app'
  },
  {
    img: '/Restaurant Web App.png',
    category: 'Next.js & NestJS',
    title: 'Restaurant Web App',
    description: 'Full-stack app with separate frontend and backend. Built APIs using NestJS and UI using Next.js. Integrated authentication and deployed using Vercel and Railway.',
    tags: ['Next.js', 'NestJS', 'Vercel', 'Railway'],
    link: 'https://restaurant-app-i1yp.vercel.app'
  },
  {
    img: 'Tour Booking App.png',
    category: 'React',
    title: 'Tour Booking App',
    description: 'Responsive booking interface with routing and reusable components. Smooth state management for the booking flow with clean UI.',
    tags: ['React', 'React Router', 'CSS'],
    link: 'https://tour-app-five-rho.vercel.app'
  },
]

export default function Projects() {
  return (
    <div className="w-full flex flex-col gap-6 sm:gap-8 bg-[#111111b2] p-4 sm:p-6 lg:p-10 rounded-2xl">
      
      <h2 className="text-[32px] sm:text-[32px] lg:text-[50px]">
        Latest Projects
      </h2>

      <p className="text-[14px] sm:text-[15px] lg:text-[18px] tracking-wider leading-relaxed max-w-2xl">
        Here are some of the projects I've built using modern JavaScript technologies.
      </p>

      <div className="flex flex-col gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="relative w-full min-h-[300px] sm:min-h-[420px] lg:min-h-[600px] rounded-2xl overflow-hidden group"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-[300px] sm:h-[420px] lg:h-[550px] object-cover transition-transform duration-500 group-hover:scale-105"/>
            <div
              className="absolute bottom-0 w-full bg-black/70 backdrop-blur-md p-3 sm:p-4 lg:p-5 transition-all duration-500">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-3 top-3 border border-[#c9f31d] text-[#c9f31d] rounded-xl px-2 py-1 text-xs sm:text-sm hover:bg-[#c9f31d] hover:text-black transition-all duration-300">
                View ↗
              </a>

              <p className="text-[12px] sm:text-[13px] lg:text-[15px] text-[#c9f31d] mb-1 tracking-wide">
                {project.category}
              </p>

              <h2 className="text-[16px] sm:text-[20px] lg:text-[28px] font-semibold mb-1 sm:mb-2">
                {project.title}
              </h2>

              <p className="text-white/60 text-[12px] sm:text-[13px] lg:text-[15px] leading-relaxed hidden sm:block">
                {project.description}
              </p>

              <div className="mt-2 sm:mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="border border-[#c9f31d] rounded-xl px-2 sm:px-3 py-[2px] text-[10px] sm:text-[12px] lg:text-[13px] text-white">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
} 