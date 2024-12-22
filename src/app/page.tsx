import React from 'react'

export default function Home() {
  return (
   
 
  <div className="grid grid-rows-[100px_auto_100px] grid-cols-[200px_1fr_200px] gap-5 min-h-screen">
  {/* Header */}
  <div className="bg-[#FACC15] col-span-3 row-start-1 text-[36px] font-bold text-center flex items-center justify-center border-2  border-white">
    Header
  </div>

  {/* Sidebar */}
  <div className="bg-[#FACC15] row-span-1 row-start-2 text-[36px] font-bold text-center flex items-center justify-center border-2 border-white">
    Sidebar
  </div>

  {/* Article */}
  <div className="bg-[#FACC15] col-start-2 row-start-2 text-[36px] font-bold text-center flex items-center justify-center border-2 border-white aspect-square">
    Article
  </div>

  {/* Ads */}
  <div className="bg-[#FACC15] col-start-3 row-start-2 text-[36px] font-bold text-center flex items-center justify-center border-2 border-white">
    Ads
  </div>

  {/* Footer */}
  <div className="bg-[#FACC15] col-span-3 row-start-3 text-[36px] font-bold text-center flex items-center justify-center border-2 border-white">
    Footer
  </div>
</div>













  );
}
