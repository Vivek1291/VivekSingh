export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="container-x">
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle mt-4">Frontend Engineer | Technical Leader | Performance Enthusiast</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-x">
          <div className="max-w-4xl grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Who I Am</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a Senior Frontend Engineer with 8+ years of hands-on experience building scalable, performance-critical React applications. My passion is creating beautiful, fast, and intuitive user interfaces.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I specialize in real-time data visualization, component architecture, and technical leadership. I believe great code is clean, well-tested, and easy to maintain.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding, I enjoy contributing to open source, writing technical articles, and mentoring junior developers.
              </p>
            </div>

            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-bold mb-3">Core Values</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Code quality and maintainability</li>
                  <li>✓ Performance and optimization</li>
                  <li>✓ User experience</li>
                  <li>✓ Continuous learning</li>
                  <li>✓ Teamwork and collaboration</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-3">Why I Stand Out</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Founding engineer experience</li>
                  <li>✓ Real-time systems expertise</li>
                  <li>✓ Proven performance optimization</li>
                  <li>✓ Technical mentorship skills</li>
                  <li>✓ Large-scale system design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
