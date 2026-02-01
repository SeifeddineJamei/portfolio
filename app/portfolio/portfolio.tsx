import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F4F7F6] text-[#2C3E50] font-sans">
      {/* Header */}
      <header className="sticky top-0 bg-[#2C3E50] text-white p-4 shadow-md transition-all duration-300">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold uppercase tracking-wider transition-transform duration-300 hover:scale-105">Seifeddine Jamei</h1>
          <a href="https://github.com/SeifeddineJamei?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-sm bg-[#00BFFF] px-2 py-1 rounded hover:bg-[#0099CC] transition-all duration-300 hover:shadow-lg transform hover:scale-105">Status: Open for Projects</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#2C3E50] text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 animate-pulse">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <img src="/Seif.png" alt="Seifeddine Jamei" className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white transition-transform duration-500 hover:scale-110 hover:rotate-3" />
          <h1 className="text-6xl font-black uppercase tracking-widest mb-4 font-mono transition-all duration-500 hover:text-[#00BFFF]">SEIFEDDINE JAMEI</h1>
          <p className="text-2xl mb-6 font-light transition-all duration-300 hover:text-gray-200">PRODUCT ENGINEER</p>
          <p className="text-lg max-w-2xl mx-auto font-light transition-all duration-300 hover:text-gray-200">
            BRIDGING ROBUST CODE & EXCEPTIONAL USER EXPERIENCES
          </p>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold uppercase tracking-wider text-center mb-12 border-b-2 border-[#2C3E50] pb-4">ENGINEER SPECS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 uppercase">Core Competencies</h3>
              <ul className="space-y-2 font-mono text-sm">
                <li>Full-Stack Development</li>
                <li>UI/UX Design</li>
                <li>Product Strategy</li>
                <li>Agile Methodologies</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 uppercase">Tools & Technologies</h3>
              <ul className="space-y-2 font-mono text-sm">
                <li>React, Node.js, TypeScript</li>
                <li>Figma, Tailwind CSS</li>
                <li>AWS, Docker</li>
                <li>Git, CI/CD</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 uppercase">Experience</h3>
              <ul className="space-y-2 font-mono text-sm">
                <li>5+ Years Engineering</li>
                <li>20+ Projects Delivered</li>
                <li>Cross-functional Teams</li>
                <li>Startup to Enterprise</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-[#F4F7F6]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold uppercase tracking-wider text-center mb-12 border-b-2 border-[#2C3E50] pb-4">PROJECT PORTFOLIO</h2>
          <div className="space-y-16">
            {[
              {
                title: 'E-COMMERCE PLATFORM',
                problem: 'Legacy system causing 30% cart abandonment',
                solution: 'Built scalable React/Node.js platform with 99.9% uptime',
                gallery: ['CAD Analysis', 'Prototype', 'Final Assembly']
              },
              {
                title: 'DESIGN SYSTEM',
                problem: 'Inconsistent UI across 5+ products',
                solution: 'Created reusable component library used in 10+ projects',
                gallery: ['Wireframes', 'Component Library', 'Implementation']
              },
              {
                title: 'MOBILE APP',
                problem: 'Native apps limiting cross-platform reach',
                solution: 'Developed React Native app with 4.8-star rating',
                gallery: ['User Research', 'Design Iterations', 'Launch Metrics']
              },
            ].map((project, index) => (
              <div key={index} className="bg-white p-8 shadow-lg">
                <h3 className="text-2xl font-bold uppercase tracking-wider mb-8 border-l-4 border-[#00BFFF] pl-4">{project.title}</h3>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold uppercase mb-4">The Problem</h4>
                    <p className="text-gray-700">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold uppercase mb-4">Engineering Solution</h4>
                    <p className="text-gray-700">{project.solution}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {project.gallery.map((item, i) => (
                    <div key={i} className="bg-gray-200 h-32 flex items-center justify-center text-center font-mono text-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold uppercase tracking-wider text-center mb-12 border-b-2 border-[#2C3E50] pb-4">ACHIEVEMENTS</h2>
          <div className="space-y-6">
            {[
              { metric: '40%', desc: 'Increase in user engagement through product redesign' },
              { metric: '5+', desc: 'Projects using custom design system' },
              { metric: '1000+', desc: 'GitHub stars on open-source contributions' },
            ].map((achievement, index) => (
              <div key={index} className="flex items-center border-l-4 border-[#00BFFF] pl-6 py-4">
                <span className="text-3xl font-bold text-[#00BFFF] mr-6 font-mono">{achievement.metric}</span>
                <p className="text-lg">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#2C3E50] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold uppercase tracking-wider mb-8">INITIATE CONTACT</h2>
          <div className="flex justify-center space-x-8">
            <a href="mailto:john.doe@example.com" className="border-2 border-white px-6 py-3 uppercase tracking-wider hover:bg-white hover:text-[#2C3E50] transition">Email</a>
            <a href="https://linkedin.com/in/johndoe" className="border-2 border-white px-6 py-3 uppercase tracking-wider hover:bg-white hover:text-[#2C3E50] transition">LinkedIn</a>
            <a href="https://github.com/johndoe" className="border-2 border-white px-6 py-3 uppercase tracking-wider hover:bg-white hover:text-[#2C3E50] transition">GitHub</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
