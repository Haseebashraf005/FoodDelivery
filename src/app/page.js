'use client'
import "flowbite";
import Header from "./_components/clientSide/Header";
import Footer from "./_components/Footer";
import { useState } from 'react';

const Page = () => {

  const [selectedLocation, setSelectedLocation] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  const locations = [
    'New York, NY',
    'Los Angeles, CA',
    'Chicago, IL',
    'Houston, TX',
    'Phoenix, AZ',
    'Philadelphia, PA',
    'San Antonio, TX',
    'San Diego, CA',
    'Dallas, TX',
    'San Jose, CA'
  ];

  const handleSearch = () => {
    console.log('Searching for:', searchQuery, 'in', selectedLocation);
    // Add your search logic here
  };

  return (
    <>
      <Header />

      <main>
        {/* Changed from min-h-screen to py-20 and updated gradient colors */}
        <div className="relative py-20 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-all duration-300">
          {/* Background overlay for better text readability */}
          <div className="absolute inset-0  bg-opacity-10 dark:bg-opacity-40"></div>

          {/* Content Container - removed min-h-screen and justify-center */}
          <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 lg:px-8">
            {/* Main Heading */}
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                Discover Amazing
              </h1>
              <p className="text-lg sm:text-xl text-white opacity-90 max-w-2xl mx-auto">
                {/* Find the best restaurants and dishes near you. Order now and satisfy your cravings! */}
              </p>
            </div>

            {/* Search Container */}
            <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 transition-colors duration-200">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Location Selector */}
                <div className="flex-1 relative">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Select Location
                  </label>
                  <div className="relative">
                    <button
                      onClick={() => setIsLocationOpen(!isLocationOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-left text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    >
                      <div className="flex items-center">
                        <svg className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className={selectedLocation ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500 dark:text-gray-400'}>
                          {selectedLocation || 'Choose your location'}
                        </span>
                      </div>
                      <svg className={`h-5 w-5 text-gray-500 dark:text-gray-400 transform transition-transform duration-200 ${isLocationOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isLocationOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
                        {locations.map((location) => (
                          <button
                            key={location}
                            onClick={() => {
                              setSelectedLocation(location);
                              setIsLocationOpen(false);
                            }}
                            className="w-full px-4 py-3 text-left text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200 border-b border-gray-100 dark:border-gray-600 last:border-b-0"
                          >
                            {location}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Search Input */}
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Search Food or Restaurant
                  </label>
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Pizza, Burger, McDonald's..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    />
                  </div>
                </div>

                {/* Search Button */}
                <div className="flex items-end">
                  <button
                    onClick={handleSearch}
                    className="w-full lg:w-auto px-8 py-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Search
                  </button>
                </div>
              </div>

              {/* Popular Searches */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Popular searches:</p>
                <div className="flex flex-wrap gap-2">
                  {['Pizza', 'Burger', 'Sushi', 'Chinese', 'Italian', 'Mexican'].map((term) => (
                    <button
                      key={term}
                      onClick={() => setSearchQuery(term)}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors duration-200"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <Footer/> */}
    </>
  );
};

export default Page;