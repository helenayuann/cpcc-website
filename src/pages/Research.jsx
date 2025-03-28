import { useState } from 'react';
import { FiExternalLink, FiGithub, FiArchive, FiUsers, FiBarChart2 } from 'react-icons/fi';

const Research = () => {
  const [activeTab, setActiveTab] = useState('all');

  const researchTopics = [
    {
      id: 1,
      title: 'Quantum Photonic Processors',
      description: 'Developing scalable photonic quantum computing architectures using integrated silicon photonics.',
      category: 'hardware',
      status: 'active',
      team: ['Dr. Chen', 'Dr. Rodriguez', '5 students'],
      collaborators: ['NASA', 'MIT'],
      publications: 12,
      link: '#',
      code: '#'
    },
    {
      id: 2,
      title: 'Topological Quantum Materials',
      description: 'Discovery and characterization of novel materials with topological properties for fault-tolerant qubits.',
      category: 'materials',
      status: 'active',
      team: ['Dr. Patel', '3 students'],
      collaborators: ['Stanford', 'Max Planck Institute'],
      publications: 8,
      link: '#',
      code: '#'
    },
    {
      id: 3,
      title: 'Quantum Machine Learning',
      description: 'Hybrid quantum-classical algorithms for optimization and pattern recognition tasks.',
      category: 'algorithms',
      status: 'active',
      team: ['Dr. Wilson', 'Dr. Chen', '4 students'],
      collaborators: ['Google Quantum AI'],
      publications: 5,
      link: '#',
      code: '#'
    },
    {
      id: 4,
      title: 'Quantum Network Protocols',
      description: 'Secure communication protocols for metropolitan-scale quantum networks.',
      category: 'communication',
      status: 'active',
      team: ['Dr. Wilson', '2 students'],
      collaborators: ['DOE', 'NIST'],
      publications: 15,
      link: '#',
      code: '#'
    },
    {
      id: 5,
      title: 'Photon-Atom Interfaces',
      description: 'Completed project developing efficient interfaces between flying photonic qubits and atomic memories.',
      category: 'hardware',
      status: 'completed',
      team: ['Dr. Rodriguez (PI)', '3 alumni'],
      collaborators: ['NSF'],
      publications: 9,
      link: '#',
      code: '#'
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? researchTopics 
    : researchTopics.filter(project => 
        project.category === activeTab || 
        project.status === activeTab
      );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Research Portfolio
          </h1>
          <p className="mt-6 text-xl max-w-3xl text-indigo-100">
            Cutting-edge quantum research at the intersection of photonics, computing, and communication.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full font-medium ${activeTab === 'all' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveTab('hardware')}
            className={`px-4 py-2 rounded-full font-medium ${activeTab === 'hardware' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          >
            Quantum Hardware
          </button>
          <button
            onClick={() => setActiveTab('algorithms')}
            className={`px-4 py-2 rounded-full font-medium ${activeTab === 'algorithms' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          >
            Algorithms
          </button>
          <button
            onClick={() => setActiveTab('materials')}
            className={`px-4 py-2 rounded-full font-medium ${activeTab === 'materials' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          >
            Quantum Materials
          </button>
          <button
            onClick={() => setActiveTab('communication')}
            className={`px-4 py-2 rounded-full font-medium ${activeTab === 'communication' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          >
            Communication
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-4 py-2 rounded-full font-medium ${activeTab === 'completed' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          >
            Completed Projects
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className={`h-2 ${project.status === 'active' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h2>
                  <span className={`px-2 py-1 text-xs rounded-full ${project.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {project.status === 'active' ? 'Active' : 'Completed'}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <FiUsers className="mr-2" />
                    <span>Team: {project.team.join(', ')}</span>
                  </div>
                  {project.collaborators && (
                    <div className="flex items-center text-sm text-gray-500">
                      <FiUsers className="mr-2" />
                      <span>Collaborators: {project.collaborators.join(', ')}</span>
                    </div>
                  )}
                  <div className="flex items-center text-sm text-gray-500">
                    <FiBarChart2 className="mr-2" />
                    <span>Publications: {project.publications}</span>
                  </div>
                </div>

                <div className="mt-6 flex space-x-3">
                  {project.link && (
                    <a 
                      href={project.link} 
                      className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      <FiExternalLink className="mr-1" /> Project Page
                    </a>
                  )}
                  {project.code && (
                    <a 
                      href={project.code} 
                      className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <FiGithub className="mr-1" /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Research Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <p className="text-sm font-medium text-indigo-600">Active Projects</p>
              <p className="text-3xl font-bold text-indigo-900">8</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-sm font-medium text-purple-600">Total Publications</p>
              <p className="text-3xl font-bold text-purple-900">124</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm font-medium text-green-600">Research Staff</p>
              <p className="text-3xl font-bold text-green-900">23</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm font-medium text-blue-600">Collaborators</p>
              <p className="text-3xl font-bold text-blue-900">18</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-md p-8 text-white">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-2">Interested in Collaborating?</h2>
              <p>We're always looking for partners in academia and industry to advance quantum technologies.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;