import { FiMail, FiGlobe, FiGithub, FiLinkedin, FiBookOpen } from 'react-icons/fi';

const People = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Prof. Prem Kumar',
      title: 'Principal Investigator',
      research: 'Optical communications, in particular, novel optical amplifiers and devices for terabits per second fiber-optic communications; quantum fiber-optics, in particular, generation and distribution of quantum entanglement over the fiber channel and quantum cryptography over fiber lines; nonlinear and quantum optics, in particular, applications of novel states of light such as squeezed and twin-beam states.',
      image: 'https://cpcc.northwestern.edu/images/profkumar2009.png',
      email: 'kumarp@northwestern.edu',
      website: 'http://users.eecs.northwestern.edu/~kumarp/',
      bio: 'A T & T Professor of Information Technology, Department of Electrical Engineering & Computer Science Professor, Department of Physics and Astronomy',
      category: 'Director'
    },
    {
      id: 2,
      name: 'Prof. Gregory Kanter',
      title: 'Senior Research Scientist',
      research: 'Experimental quantum optics including the use of nonlinear frequency conversion for quantum measurements.',
      image: 'https://cpcc.northwestern.edu/images/kanter.jpg',
      email: 'gregorykanter@northwestern.edu',
      website: 'https://quantum.cpcc.edu/mrodriguez',
      bio: 'Research Associate Professor, Department of Electrical Engineering and Computer Science',
      category: 'Faculty'
    },
    {
      id: 3,
      name: 'Prof. Kim Fook Lee',
      title: 'Materials Science Lead',
      research: 'Fiber based entanglement source, optical communication, Wigner function.',
      image: 'https://cpcc.northwestern.edu/images/kimfooklee.png',
      email: 'kim.lee@northwestern.edu',
      website: 'https://quantum.cpcc.edu/ppatel',
      bio: 'Research Professor, Electrical Engineering and Computer Science',
      category: 'Faculty'
    },
    {
      id: 4,
      name: 'James Wilson',
      title: 'PhD Candidate',
      research: 'Quantum communication, Network protocols',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      email: 'jwilson@cpcc.edu',
      website: 'https://quantum.cpcc.edu/jwilson',
      bio: 'Developing metropolitan-scale quantum network testbeds and secure communication protocols.',
      category: 'Post-Doctoral Research Associates'
    },
    {
      id: 5,
      name: 'Emma Zhang',
      title: 'Graduate Researcher',
      research: 'Quantum machine learning, Hybrid algorithms',
      image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      email: 'ezhang@cpcc.edu',
      website: 'https://quantum.cpcc.edu/ezhang',
      social: {
        github: 'emma-quantml',
        linkedin: 'emma-zhang-quantum'
      },
      bio: 'Focusing on quantum-classical hybrid algorithms for machine learning applications.',
      category: 'Graduate Students'
    },
    {
      id: 6,
      name: 'Alex Kim',
      title: 'Lab Manager',
      research: 'Cryogenics, Experimental systems',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      email: 'akim@cpcc.edu',
      website: '',
      social: {
        github: '',
        linkedin: 'alex-kim-quantum'
      },
      bio: 'Manages lab operations and maintains our cryogenic quantum measurement systems.',
      category: 'Undergraduate Students'
    }
  ];

//   const alumni = [
//     {
//       id: 1,
//       name: 'Dr. Maria Gonzalez',
//       year: '2022',
//       current: 'Quantum Engineer, Google Quantum AI',
//       research: 'Photon-atom interfaces'
//     },
//     {
//       id: 2,
//       name: 'Dr. David Park',
//       year: '2021',
//       current: 'Assistant Professor, MIT',
//       research: 'Topological quantum computing'
//     }
//   ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Our Team
          </h1>
          <p className="mt-6 text-xl max-w-3xl text-indigo-100">
            The brilliant minds advancing quantum research at CPCC
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Director */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
            Director
          </h2>
          <div className="space-y-8">
            {teamMembers.filter(member => member.category === 'Director').map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Faculty */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
            Faculty
          </h2>
          <div className="space-y-8">
            {teamMembers.filter(member => member.category === 'Faculty').map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Post-Doctoral Research Associates */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
            Post-Doctoral Research Associates
          </h2>
          <div className="space-y-8">
            {teamMembers.filter(member => member.category === 'Post-Doctoral Research Associates').map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Graduate Students */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
            Students
          </h2>
          <div className="space-y-8">
            {teamMembers.filter(member => member.category === 'Graduate Students').map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Undergraduate Students */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
            Support Staff
          </h2>
          <div className="space-y-8">
            {teamMembers.filter(member => member.category === 'Undergraduate Students').map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Alumni
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
            Alumni
          </h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Graduation Year
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Current Position
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Research Area
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {alumni.map((person) => (
                  <tr key={person.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {person.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.year}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {person.current}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {person.research}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div> */}

        {/* Join Us CTA */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-md p-8 text-white">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-2">Join Our Team</h2>
              <p>We're always looking for talented researchers at all levels to join our quantum research efforts.</p>
            </div>
            <div className="mt-4 md:mt-0">
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

// Member Card Component
const MemberCard = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={member.image} alt={member.name} />
        </div>
        <div className="p-6 flex-1">
          <div className="flex items-center">
            <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
          </div>
          <p className="mt-1 text-sm font-medium text-indigo-600">{member.title}</p>
          <p className="mt-3 text-sm text-gray-500">{member.bio}</p>
          <p className="mt-2 text-gray-600 flex items-center">{member.research}</p>
          <div className="mt-4 flex space-x-4">
            {member.email && (
              <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-indigo-600">
                <FiMail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            )}
            {member.website && (
              <a href={member.website} className="text-gray-400 hover:text-indigo-600">
                <FiGlobe className="h-5 w-5" />
                <span className="sr-only">Website</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;