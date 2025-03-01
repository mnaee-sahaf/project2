export function Footer() {
    return (
      <footer className="w-full bg-white px-8 py-8">
        {/* Main Footer Content */}
        <div className="w-full max-w-7xl mx-auto pt-8">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            
            {/* Interactive ML Section */}
            <div className="flex-1">
              <h1 className="text-lg font-bold mb-4">Interactive ML</h1>
              <p className="text-gray-700">
                Learn and grow your knowledge about ML using Interactive-ML.
              </p>
            </div>
  
            {/* Quick Links Section */}
            <nav className="flex-1">
              <h1 className="text-lg font-bold mb-4">Quick Links</h1>
              <ul className="space-y-2">
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
                    Roadmap
                  </a>
                </li>
              </ul>
            </nav>
  
            {/* Connect With Us Section */}
            <div className="flex-1">
              <h1 className="text-lg font-bold mb-4">Connect With Us</h1>
              <ul className="space-y-2">
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
        <div className="mt-8 border-t border-gray-300 pt-6 text-center">
          <p className="text-[#4F47E5] pb-6">© 2025 Interactive-ML - Muneeb Sahaf - All rights reserved</p>
        </div>
      </footer>
    );
  }
  