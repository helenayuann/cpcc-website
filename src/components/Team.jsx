const Team = () => {
    const teamMembers = [
      {
        id: 1,
        name: 'Prof. Prem Kumar',
        role: 'Principal Investigator',
        imageUrl: 'https://cpcc.northwestern.edu/images/profkumar2009.png',
        bio: 'A T & T Professor of Information Technology, Department of Electrical Engineering & Computer Science Professor, Department of Physics and Astronomy',
      },
      {
        id: 2,
        name: 'Prof. Gregory Kanter',
        role: 'Senior Research Scientist',
        imageUrl: 'https://cpcc.northwestern.edu/images/kanter.jpg',
        bio: 'Research Associate Professor, Department of Electrical Engineering and Computer Science'
      },
      {
        id: 3,
        name: 'Prof. Kim Fook Lee',
        role: 'Materials Science Lead',
        imageUrl: 'https://cpcc.northwestern.edu/images/kimfooklee.png',
        bio: 'Research Professor, Electrical Engineering and Computer Science'
      }
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