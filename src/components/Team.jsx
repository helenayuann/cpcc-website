const Team = () => {
    const teamMembers = [
      {
        id: 1,
        name: 'Dr. Sarah Chen',
        role: 'Director, Quantum Photonics',
        imageUrl:
          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        bio: 'Expert in quantum optics with over 15 years of experience in photonic quantum computing.',
      },
      {
        id: 2,
        name: 'Dr. Michael Rodriguez',
        role: 'Senior Researcher',
        imageUrl:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        bio: 'Specializes in quantum algorithms and error correction techniques.',
      },
      {
        id: 3,
        name: 'Dr. Priya Patel',
        role: 'Quantum Materials Scientist',
        imageUrl:
          'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        bio: 'Develops novel materials for quantum computing applications.',
      },
      {
        id: 4,
        name: 'Dr. James Wilson',
        role: 'Quantum Communication Lead',
        imageUrl:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        bio: 'Pioneer in quantum key distribution and secure communication protocols.',
      },
    ];
  
    return (
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Our Team
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              World-Class Quantum Researchers
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Meet the brilliant minds driving innovation at CPCC.
            </p>
          </div>
  
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((person) => (
                <div key={person.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src={person.imageUrl}
                      alt={person.name}
                    />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-indigo-600">
                        {person.role}
                      </p>
                      <div className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">{person.name}</p>
                        <p className="mt-3 text-base text-gray-500">{person.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Team;