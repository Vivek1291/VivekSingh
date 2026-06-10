export default function Skills() {
  const skillGroups = [
    {
      category: 'Frontend Frameworks',
      skills: ['React.js', 'Redux Toolkit', 'React Query', 'Context API', 'Next.js (familiar)']
    },
    {
      category: 'Languages & Core Concepts',
      skills: ['TypeScript', 'JavaScript ES6+', 'Event Loop', 'Closures', 'Async/Await']
    },
    {
      category: 'UI & Styling',
      skills: ['HTML5', 'CSS3', 'SASS', 'Tailwind CSS', 'Material UI', 'Responsive Design']
    },
    {
      category: 'Build & Tools',
      skills: ['Webpack', 'Vite', 'Babel', 'npm', 'Yarn', 'Git']
    },
    {
      category: 'Testing & Quality',
      skills: ['Jest', 'React Testing Library', 'Unit Testing', 'Integration Testing', 'WCAG']
    },
    {
      category: 'APIs & Real-Time',
      skills: ['REST APIs', 'Server-Sent Events (SSE)', 'WebSocket', 'Fetch API']
    },
    {
      category: 'DevOps & CI/CD',
      skills: ['GitHub Actions', 'Jenkins', 'CI/CD Pipelines', 'Agile/Scrum']
    },
    {
      category: 'Monitoring & Performance',
      skills: ['Sentry', 'PostHog', 'Performance Optimization', 'Profiling', 'Bundle Analysis']
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="container-x">
          <h1 className="section-title">Technical Skills</h1>
          <p className="section-subtitle mt-4">Tools, technologies, and expertise I work with</p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skillGroups.map((group, i) => (
              <div key={i} className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{group.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Core Competencies */}
          <div className="card bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">What Sets Me Apart</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                '8+ years of production React experience',
                'Real-time systems expertise (SSE, WebSocket)',
                'Performance optimization at scale',
                'Technical leadership & mentorship',
                'Component-driven architecture',
                'Founding engineer with end-to-end ownership',
                'Production incident resolution',
                'Type-safe development with TypeScript'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
