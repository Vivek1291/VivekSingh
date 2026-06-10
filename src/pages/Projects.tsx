
export default function Projects() {
  const projects = [
    {
      title: 'Web SCADA++',
      subtitle: 'Real-Time Industrial IoT Dashboard',
      description: 'A browser-based SCADA platform for industrial plant monitoring with live sensor data streaming across 100s+ concurrent data points.',
      technologies: ['React', 'SSE', 'TypeScript', 'Redux Toolkit', 'Vite'],
      impact: '40% faster load time | Sub-second latency | 50-200 daily users',
      highlights: [
        'Engineered React + SSE pipeline for high-frequency updates',
        'Implemented batching strategies to prevent render thrashing',
        'Virtualized large datasets for optimal performance',
        'Established performance monitoring and budgets'
      ]
    },
    {
      title: 'Component Library & Design System',
      subtitle: 'Production-Grade UI System',
      description: 'Built from scratch with TypeScript contracts, comprehensive Jest test coverage, and Storybook documentation.',
      technologies: ['React', 'TypeScript', 'Jest', 'Storybook', 'Tailwind CSS'],
      impact: '30-40% development effort reduction | 100% test coverage',
      highlights: [
        'Designed compound component patterns for flexibility',
        'Established TypeScript prop contracts for type safety',
        'Created comprehensive Jest + React Testing Library test suite',
        'Built Storybook documentation for team collaboration'
      ]
    },
    {
      title: 'Visual Workflow Designer',
      subtitle: 'No-Code Configuration Tool',
      description: 'Interactive React-based drag-and-drop editor enabling non-technical teams to model plant logic and create Excel-style formulas.',
      technologies: ['React', 'Canvas API', 'TypeScript', 'State Management'],
      impact: 'Reduced configuration time | Freed engineering resources',
      highlights: [
        'Implemented complex drag-and-drop interactions',
        'Built formula evaluation engine in JavaScript',
        'Created intuitive UI for non-technical users',
        'Enabled real-time preview and validation'
      ]
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="container-x">
          <h1 className="section-title">Featured Projects</h1>
          <p className="section-subtitle mt-4">Real-world applications I've built and shipped</p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16">
        <div className="container-x">
          <div className="space-y-12">
            {projects.map((project, i) => (
              <div key={i} className="card">
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-lg text-blue-600 font-semibold mb-4">{project.subtitle}</p>
                  <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Key Highlights</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((h, j) => (
                        <li key={j} className="flex gap-2 text-gray-600">
                          <span className="text-blue-600 font-bold">→</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-sm text-gray-600 mb-2">Impact</p>
                      <p className="font-semibold text-gray-900">{project.impact}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-3 font-semibold">Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
