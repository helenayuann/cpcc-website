import { FiMail, FiGlobe } from 'react-icons/fi';

// per person: name, title, research area, image, email, website, bio, category, cv, github, etc.

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
      name: 'Dr. Gamze Gul',
      title: 'Postdoctoral Researcher',
      research: 'TBD',
      image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=0zYFVvwAAAAJ&citpid=10',
      email: 'gamze.gul@northwestern.edu',
      website: 'https://urldefense.com/v3/__https://gamzegul.github.io/__;!!Dq0X2DkFhyF93HkjWTBQKhk!SWY8Pifs_U77gCuxwXC10638Tn7h1Gzohl1ogaaxSToGL0XnsoepIB5Ls_21OgNAZqcmBWgEzwCxlCSRtsWyQfBA0yCUTMGcHEwWX9He_w$',
      bio: 'Gamze Gül received her Ph.D. in Applied Physics from Northwestern University in 2025, where she conducted research in Prof. Prem Kumar’s group on experimental quantum networking. Her doctoral work focused on Quantum Wrapper Networking (QWN) for polarization-entangled photon pairs, exploring how classical information bits can be leveraged to enable routing, monitoring, and control of quantum signals, and investigating noise mechanisms arising from their coexistence in optical fibers. Her work has been published in leading journals, including Optica Quantum, IEEE Journal of Lightwave Technology, and IEEE Communications Magazine, ​and she has presented her work at major international conferences, including the Optical Fiber Communication Conference (OFC), Quantum 2.0, Frontiers in Optics (FiO), and Europhoton. Her teaching efforts were recognized by the Northwestern University ECE department with the Best Teaching Assistant Award in 2021. She has contributed to professional service by serving as a technical program committee member for the Quantum Networking and Communications track at IEEE Quantum Week 2025 and the IEEE International Conference on Quantum Communications, Networking, and Computing (QCNC) 2026. In recognition of her contributions to optical communications research, she was awarded the 2025 Corning Women in Optical Communications Scholarship. Gamze earned her M.S. in Physics from Koç University in 2019 and her B.S. in Electrical and Electronics Engineering from Bilkent University in 2017, where she also completed a minor in Physics. She is an active member of Optica, IEEE, and the European Physical Society. Outside the lab, she practices yoga, plays tennis, and enjoys long walks with her dog, Toffee.',
      category: 'Post-Doctoral Research Associates'
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