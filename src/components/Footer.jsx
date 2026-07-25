import React from 'react';

export default function Footer() {
  const popularTags = [
    'Amazing', 'Envato', 'Themes', 
    'Clean', 'Wordpress', 'Creative', 
    'Mutilpurpose', 'Retina Ready', 
    'Twitter', 'Responsive'
  ];

  const recentPosts = [
    'Lorem Ispum dolor sit amet putilor',
    'Medical is all about quality.',
    'Is your website user friendly ?',
    'Ai offer weekly updates & more.',
    'Customer should love your web.',
    'Your site smooth and stunning.'
  ];

  return (
    <footer className="w-full bg-[#ffffff] text-gray-500 py-16 px-6 font-sans border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
        
        {/* Column 1: Brand Info & Contact */}
        <div className="space-y-6">
          {/* Logo Brand Block */}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 border-2 border-[#8a1515] rounded-xl flex flex-col items-center justify-center p-1.5 text-[#8a1515] shrink-0">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
              </svg>
              <div className="w-6 h-0.5 bg-[#8a1515] mt-0.5"></div>
            </div>
            <div>
              <h2 className="text-3xl font-black text-black tracking-wider leading-none">HOPE</h2>
              <span className="text-[10px] font-bold text-gray-400 tracking-[0.25em] block mt-1">MEDICAL</span>
            </div>
          </div>

          <p className="text-lg text-gray-600 font-light leading-relaxed pr-4">
            Sed elit quam, iaculis sed semper sit amet udin vitae nibh at magna akal semperFusce.
          </p>

          {/* Contact Details List */}
          <div className="text-[15px] text-gray-600 space-y-4 pt-2">
            <div className="flex items-start gap-4 pb-3 border-b border-gray-100">
              <span className="text-gray-400 mt-0.5">📍</span>
              <p className="leading-tight">69 Halsey St, New York, Ny 10002, United States.</p>
            </div>
            <div className="flex items-center gap-4 pb-3 border-b border-gray-100">
              <span className="text-gray-400">✉️</span>
              <p>hello@yourdomain.com</p>
            </div>
            <div className="flex items-center gap-4 pb-3 border-b border-gray-100">
              <span className="text-gray-400">📞</span>
              <p>(0091) 8547 632521</p>
            </div>
          </div>
        </div>

        {/* Column 2: Popular Tags */}
        <div>
          <h3 className="text-[18px] font-bold text-black tracking-wider uppercase mb-8">
            Popular Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag, idx) => (
              <span 
                key={idx} 
                className="bg-[#f5f5f5] text-gray-600 text-[12px] font-light px-4 py-2 rounded-sm hover:bg-[#8a1515] hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Column 3: Recent Posts */}
        <div>
          <h3 className="text-[18px] font-bold text-black tracking-wider uppercase mb-8">
            Recent Posts
          </h3>
          <div className="flex flex-col text-[14px] text-gray-600">
            {recentPosts.map((post, idx) => (
              <a 
                key={idx} 
                href={`#post-${idx}`}
                className="py-3 border-b border-gray-100 last:border-0 hover:text-[#8a1515] transition-colors duration-150 flex items-start"
              >
                <span className="mr-2 text-gray-300 font-light">&gt;&gt;</span>
                <span className="leading-tight font-light">{post}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Column 4: Newsletter */}
        <div className="space-y-6">
          <h3 className="text-[18px] font-bold text-black tracking-wider uppercase mb-8">
            Newsletter
          </h3>
          <p className="text-[14px] text-gray-600 font-light leading-relaxed">
            Sign up for our mailing list to get latest updates and offers.
          </p>

          {/* Form Input Field Group */}
          <div className="flex w-full items-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-[#fdfdfd] border border-gray-100 text-gray-600 text-[14px] font-light px-4 py-3.5 focus:outline-none focus:border-gray-200"
            />
            <button className="bg-[#8a1515] text-white px-5 py-3.5 hover:bg-black transition-colors duration-200 shrink-0">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </button>
          </div>

          {/* Minimal Social Media Row */}
          <div className="flex items-center gap-5 pt-4 text-gray-400 text-sm">
            <a href="#twitter" className="hover:text-[#8a1515] transition-colors">🐦</a>
            <a href="#google" className="hover:text-[#8a1515] transition-colors font-bold text-xs">G+</a>
            <a href="#pinterest" className="hover:text-[#8a1515] transition-colors">📌</a>
            <a href="#rss" className="hover:text-[#8a1515] transition-colors">📶</a>
            <a href="#facebook" className="hover:text-[#8a1515] transition-colors font-bold">f</a>
            <a href="#dribbble" className="hover:text-[#8a1515] transition-colors">🌐</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
