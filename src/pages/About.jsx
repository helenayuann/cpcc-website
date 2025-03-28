const About = () => {
    return (
      <div className="min-h-screen bg-white">
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
                    The Center for Photonic Communication and Computing is a world-leading research facility dedicated to advancing quantum technologies.
                  </p>
                </div>
              </main>
            </div>
          </div>
        </div>
  
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
                        We push the boundaries of quantum computing through innovative research in photonics and materials science.
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
  
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Quantum Security</h3>
                      <p className="mt-2 text-base text-gray-500">
                        We develop unbreakable encryption methods using quantum key distribution and other quantum-safe protocols.
                      </p>
                    </div>
                  </div>
                </div>
  
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Education & Outreach</h3>
                      <p className="mt-2 text-base text-gray-500">
                        We train the next generation of quantum scientists and educate the public about quantum technologies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">History</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Our Journey in Quantum Research
              </p>
            </div>
  
            <div className="mt-10">
              <div className="relative">
                <div className="absolute left-0 top-0 h-full w-0.5 bg-indigo-200"></div>
                <div className="space-y-8">
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-0 h-4 w-4 rounded-full bg-indigo-500 border-4 border-indigo-200"></div>
                    <h3 className="text-lg font-medium text-gray-900">2010 - Foundation</h3>
                    <p className="mt-2 text-gray-600">
                      Established with a vision to explore quantum phenomena in photonic systems, CPCC began with just three researchers in a small lab.
                    </p>
                  </div>
  
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-0 h-4 w-4 rounded-full bg-indigo-500 border-4 border-indigo-200"></div>
                    <h3 className="text-lg font-medium text-gray-900">2014 - Breakthrough</h3>
                    <p className="mt-2 text-gray-600">
                      Published groundbreaking work on photonic quantum gates, attracting international attention and funding.
                    </p>
                  </div>
  
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-0 h-4 w-4 rounded-full bg-indigo-500 border-4 border-indigo-200"></div>
                    <h3 className="text-lg font-medium text-gray-900">2018 - Expansion</h3>
                    <p className="mt-2 text-gray-600">
                      Moved to a new state-of-the-art facility and expanded our team to 15 researchers across multiple quantum disciplines.
                    </p>
                  </div>
  
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-0 h-4 w-4 rounded-full bg-indigo-500 border-4 border-indigo-200"></div>
                    <h3 className="text-lg font-medium text-gray-900">2022 - Quantum Network</h3>
                    <p className="mt-2 text-gray-600">
                      Successfully demonstrated a city-scale quantum communication network, a major milestone for practical quantum technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;