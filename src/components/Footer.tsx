

export function Footer() {
    return (
      <footer className="w-full bg-white border border-gray-200 hidden md:block">
        {/* Main Footer Content */}
        <div className="w-full max-w-7xl mx-auto p-4 md:pt-6">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            
            {/* Interactive ML Section */}
            <div className="flex-1">
              <h1 className="text-lg font-bold mb-4">Interactive ML</h1>
              <p className="text-gray-700 text-sm md:text-base">
                Learn and grow your knowledge about ML using Interactive-ML.
              </p>
            </div>
  
            {/* Quick Links Section */}
            <nav className="flex-1">
              <h1 className="text-lg font-bold mb-4">Interactive CS</h1>
              <ul className="space-y-2 text-sm md:text-base">
                <li>
                  <a href="/about" className="text-gray-700 hover:text-[#4F47E5] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/feedback" className="text-gray-700 hover:text-[#4F47E5] transition-colors">
                    Give Feedback
                  </a>
                </li>
                <li>
                  <a href="/roadmap" className="text-gray-700 hover:text-[#4F47E5] transition-colors">
                  </a>
                </li>
              </ul>
            </nav>
  
            {/* Connect With Us Section */}
            <div className="flex-1">
              <h1 className="text-lg font-bold mb-4">Connect With Us</h1>
              <ul className="space-y-1 text-sm md:text-base">
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#4F47E5] transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#4F47E5] transition-colors">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#4F47E5] transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@interactive-ml.com" className="text-gray-700 hover:text-[#4F47E5] transition-colors">
                    Mail
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
  
        {/* Copyright Section */}
        <div className="w-full text-center py-2 bg-gray-800 text-white mt-4 text-xs md:text-sm">
          <p>© 2025 Interactive-ML - Muneeb Sahaf - All rights reserved</p>
        </div>
      </footer>
    );
  }
  