import { FiMail, FiGlobe, FiGithub, FiLinkedin, FiBookOpen } from 'react-icons/fi';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      title: 'Director, Principal Investigator',
      research: 'Quantum photonics, Integrated quantum circuits',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      email: 'schen@cpcc.edu',
      category: 'faculty'
    },
    {
      id: 2,
      name: 'Dr. Michael Rodriguez',
      title: 'Senior Research Scientist',
      research: 'Quantum algorithms, Error correction',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      email: 'mrodriguez@cpcc.edu',
      category: 'research'
    },
    {
      id: 3,
      name: 'Dr. Priya Patel',
      title: 'Materials Science Lead',
      research: 'Topological materials, Superconducting qubits',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      email: 'ppatel@cpcc.edu',
      category: 'research'
    },
    {
      id: 4,
      name: 'James Wilson',
      title: 'PhD Candidate',
      research: 'Quantum communication, Network protocols',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      email: 'jwilson@cpcc.edu',
      category: 'students'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">About the</span>
                  <span className="block text-indigo-600">CPCC</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Pioneering quantum research through interdisciplinary collaboration and innovation.
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Mission</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Advancing Quantum Technologies
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Research Excellence</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Push the boundaries of quantum computing through innovative research in photonics and materials science.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">State-of-the-Art Facilities</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Our lab houses cutting-edge equipment for quantum experiments, including cryogenic systems and ultra-fast lasers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Team</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Meet the Quantum Researchers
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Interdisciplinary team pushing the boundaries of quantum science and technology.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img className="h-48 w-full object-cover" src={member.image} alt={member.name} />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                    <p className="text-sm font-medium text-indigo-600">{member.title}</p>
                    <p className="mt-2 text-sm text-gray-600 flex items-center">
                      <FiBookOpen className="mr-1" /> {member.research}
                    </p>
                    <div className="mt-4">
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        <FiMail className="mr-1" /> Contact
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="/people"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              View Full Team
            </a>
          </div>
        </div>
      </div>

      {/* History Timeline */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">History</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Quantum Journey
            </p>
          </div>

          <div className="mt-10">
            <div className="relative">
              <div className="absolute left-0 top-0 h-full w-0.5 bg-indigo-200"></div>
              <div className="space-y-8">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 h-4 w-4 rounded-full bg-indigo-500 border-4 border-indigo-200"></div>
                  <h3 className="text-lg font-medium">2010 - Foundation</h3>
                  <p className="mt-2 text-gray-600">
                    Established with a vision to explore quantum phenomena in photonic systems.
                  </p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 h-4 w-4 rounded-full bg-indigo-500 border-4 border-indigo-200"></div>
                  <h3 className="text-lg font-medium">2014 - Breakthrough</h3>
                  <p className="mt-2 text-gray-600">
                    Published groundbreaking work on photonic quantum gates.
                  </p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 h-4 w-4 rounded-full bg-indigo-500 border-4 border-indigo-200"></div>
                  <h3 className="text-lg font-medium">2018 - Expansion</h3>
                  <p className="mt-2 text-gray-600">
                    Moved to new state-of-the-art facility with expanded team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Join Us CTA */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Join Our Quantum Research Team</span>
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-indigo-100">
              We're always looking for talented researchers to join our mission.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Open Positions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;