const Publications = () => {
    const publications = [
      {
        id: 1,
        name: 'Quantum Photonic Processor',
        description:
          'Developing a scalable photonic quantum processor using integrated silicon photonics and novel quantum light sources.',
        status: 'Ongoing',
        funding: 'National Science Foundation',
        imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
      {
        id: 2,
        name: 'Quantum Internet Testbed',
        description:
          'Building a metropolitan-scale testbed for quantum key distribution and entanglement distribution protocols.',
        status: 'Active',
        funding: 'Department of Energy',
        imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
      {
        id: 3,
        name: 'Topological Quantum Materials',
        description:
          'Discovery and characterization of new materials with topological properties for fault-tolerant quantum computing.',
        status: 'Completed',
        funding: 'DARPA',
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
      {
        id: 4,
        name: 'Quantum Machine Learning',
        description:
          'Developing quantum algorithms for machine learning applications with potential speedups over classical approaches.',
        status: 'Ongoing',
        funding: 'Industry Partnership',
        imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
    ];
  
    return (
      <div className="min-h-screen bg-white">
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">Research</span>
                    <span className="block text-indigo-600">Projects</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Explore our cutting-edge research initiatives in quantum computing and photonics.
                  </p>
                </div>
              </main>
            </div>
          </div>
        </div>
  
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Current Projects</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Advancing Quantum Technologies
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Our publications span fundamental research to practical applications.
              </p>
            </div>
  
            <div className="mt-10">
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {publications.map((publication) => (
                  <div key={publication.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                    <div className="flex-shrink-0">
                      <img className="h-48 w-full object-cover" src={publication.imageUrl} alt={publication.name} />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-indigo-600">
                          {publication.status} • {publication.funding}
                        </p>
                        <a href="#" className="block mt-2">
                          <h3 className="text-xl font-semibold text-gray-900">{publication.name}</h3>
                          <p className="mt-3 text-base text-gray-500">{publication.description}</p>
                        </a>
                      </div>
                      <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                          <a href="#">
                            <span className="sr-only">Learn more</span>
                            <svg className="h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </a>
                        </div>
                        <div className="ml-3">
                          <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            Learn more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
  
        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Collaborations</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Working with Leading Institutions
              </p>
            </div>
  
            <div className="mt-10">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="col-span-1 flex justify-center">
                  <img className="h-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/National_Science_Foundation_logo.svg/1200px-National_Science_Foundation_logo.svg.png" alt="NSF" />
                </div>
                <div className="col-span-1 flex justify-center">
                  <img className="h-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/US-DepartmentOfEnergy-Seal.svg/1200px-US-DepartmentOfEnergy-Seal.svg.png" alt="DOE" />
                </div>
                <div className="col-span-1 flex justify-center">
                  <img className="h-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/DARPA_Logo.jpg/1200px-DARPA_Logo.jpg" alt="DARPA" />
                </div>
                <div className="col-span-1 flex justify-center">
                  <img className="h-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="Google" />
                </div>
                <div className="col-span-1 flex justify-center">
                  <img className="h-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_logo_%282012%29.svg/1200px-Microsoft_logo_%282012%29.svg.png" alt="Microsoft" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Publications;