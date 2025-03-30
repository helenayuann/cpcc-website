import { useState } from 'react';
import { FiExternalLink, FiDownload, FiFilter } from 'react-icons/fi';

const Publications = () => {
  // Sample publication data - replace with your actual publications
  const publications = [
    {
      id: 1,
      title: "Programmable optical waveform reshaping on a picosecond timescale",
      authors: "P. Manurkar, N. Jain, P. Kumar, and G. S. Kanter",
      journal: "Optics Letters",
      year: 2017,
      volume: "42",
      pages: "951-954",
      doi: "10.1364/OL.42.000951",
      type: "article"
    },
    {
      id: 2,
      title: "Multidimensional mode-separable frequency conversion for high-speed quantum communication",
      authors: "P. Manurkar, N. Jain, M. Silver, Y.-P. Huang, C. Langrock, M. M. Fejer, P. Kumar, and G. S. Kanter",
      journal: "Optica",
      year: 2016,
      volume: "3",
      pages: "1300-1307",
      doi: "10.1364/OPTICA.3.0013003",
      type: "journal"
    },
    {
      id: 3,
      title: "Metropolitan-Scale Quantum Network Testbed",
      conference: "Quantum Information Processing Conference (QIP 2022)",
      year: 2022,
      pages: "45-52",
      doi: "10.1109/QIP.2022.00012",
      type: "conference"
    },
    {
      id: 4,
      title: "Hybrid Quantum-Classical Machine Learning Architectures",
      authors: "Zhang E, Chen S, Kim A",
      journal: "npj Quantum Information",
      year: 2021,
      volume: "7",
      pages: "104",
      doi: "10.1038/s41534-021-00438-7",
      type: "journal"
    }
  ];

  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPublications = publications.filter(pub => {
    const matchesFilter = activeFilter === 'all' || pub.type === activeFilter;
    const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         pub.authors?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Publications
          </h1>
          <p className="mt-6 text-xl max-w-3xl text-indigo-100">
            Research outputs from the CPCC team
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and Search */}
        <div className="mb-12 bg-white p-6 rounded-lg shadow">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiFilter className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search publications..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-md ${activeFilter === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                All
              </button>
              <button
                onClick={() => setActiveFilter('journal')}
                className={`px-4 py-2 rounded-md ${activeFilter === 'journal' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                Journal Articles
              </button>
              <button
                onClick={() => setActiveFilter('conference')}
                className={`px-4 py-2 rounded-md ${activeFilter === 'conference' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                Conference Papers
              </button>
            </div>
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredPublications.length > 0 ? (
            filteredPublications.map((pub) => (
              <div key={pub.id} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900">{pub.title}</h3>
                <p className="mt-1 text-gray-600">{pub.authors || pub.conference}</p>
                
                {pub.journal && (
                  <p className="mt-2 text-gray-700">
                    <span className="font-medium">{pub.journal}</span>
                    {pub.volume && `, ${pub.volume}`}
                    {pub.pages && `, pp. ${pub.pages}`}
                    {pub.year && ` (${pub.year})`}
                  </p>
                )}

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    <FiExternalLink className="mr-1" /> DOI
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No publications found matching your criteria</p>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <p className="text-3xl font-bold text-indigo-600">{publications.length}+</p>
            <p className="mt-2 text-gray-600">Total Publications</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <p className="text-3xl font-bold text-indigo-600">
              {publications.filter(p => p.type === 'journal').length}
            </p>
            <p className="mt-2 text-gray-600">Journal Articles</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <p className="text-3xl font-bold text-indigo-600">
              {publications.filter(p => p.type === 'conference').length}
            </p>
            <p className="mt-2 text-gray-600">Conference Papers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;