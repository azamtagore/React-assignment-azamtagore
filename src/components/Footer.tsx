const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 font-sans border-t border-gray-100 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand & Info Column */}
          <div className="md:col-span-5 space-y-4">
            {/* Logo */}
           <div><img className="h-8" src="/src/assets/logo-text.png" alt="logo" /></div>
              {/* <div className="w-8 h-8 rounded-lg from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                DS
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Dev<span className="text-pink-500">Stack</span>
              </span>
            </div> */}

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-2">
              <a href="#github" className="text-xs font-semibold text-slate-800 hover:text-pink-500 transition-colors">
                GitHub
              </a>
              <a href="#twitter" className="text-xs font-semibold text-slate-800 hover:text-pink-500 transition-colors">
                Twitter
              </a>
              <a href="#linkedin" className="text-xs font-semibold text-slate-800 hover:text-pink-500 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="md:col-span-7 grid grid-cols-3 gap-6">
            
            {/* Product Column */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Product
              </h3>
              <ul className="space-y-2 text-xs text-gray-400 font-medium">
                <li><a href="#home" className="hover:text-slate-800 transition-colors">Home</a></li>
                <li><a href="#technologies" className="hover:text-slate-800 transition-colors">Technologies</a></li>
                <li><a href="#projects" className="hover:text-slate-800 transition-colors">Projects</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Company
              </h3>
              <ul className="space-y-2 text-xs text-gray-400 font-medium">
                <li><a href="#about" className="hover:text-slate-800 transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-slate-800 transition-colors">Contact</a></li>
                <li><a href="#careers" className="hover:text-slate-800 transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Legal
              </h3>
              <ul className="space-y-2 text-xs text-gray-400 font-medium">
                <li><a href="#privacy" className="hover:text-slate-800 transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-slate-800 transition-colors">Terms of Service</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar Divider & Copyright */}
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#privacy" className="hover:text-slate-800 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-slate-800 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;