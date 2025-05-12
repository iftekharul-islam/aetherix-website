const Home = () => {
    return(
        <div className=" mx-auto">
      <section className="bg-gradient-to-br from-[#002a57] to-[#0097b2] px-20 min-h-screen flex justify-between items-center text-white relative overflow-hidden">
        <div className="max-w-xl space-y-6 z-10">
          <p className="uppercase text-sm tracking-wide text-[#d1d5db]">
            Expert Consulting
          </p>
          <h1 className="text-5xl font-bold leading-tight">
            Reliably Guiding Your <br />
            <span className="text-[#00e0d0]">Business</span> to Success
          </h1>
          <p className="text-base text-white/80">
            Our highly qualified global team is uniquely qualified to deliver
            high-performance sustainable landmark buildings through our
            integrated suite
          </p>
          <button className="bg-white text-[#002a57] px-6 py-3 rounded-full font-semibold flex items-center gap-2">
            Contact Us <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <div className="relative space-y-4 z-10">
          <div className="flex gap-4">
            <div className="bg-white rounded-xl p-4 text-center shadow-md w-40">
              <img
                src="https://placehold.co/80x80"
                className="rounded-full mx-auto mb-2"
              />
              <p className="text-[#002a57] text-sm font-semibold">
                Consulting Services
              </p>
              <p className="text-xs text-gray-500">Integrated services</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-md w-40">
              <img
                src="https://placehold.co/80x80"
                className="rounded-full mx-auto mb-2"
              />
              <p className="text-[#002a57] text-sm font-semibold">
                Qualified Global Team
              </p>
              <p className="text-xs text-gray-500">High performance</p>
            </div>
          </div>
          <div className="text-center text-sm">
            <p className="text-white font-semibold">
              547+
              <br />
              <span className="text-xs">Smart Businesses growing with us</span>
            </p>
          </div>
          <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 py-1 text-[#002a57] text-sm font-medium shadow-lg">
            <i className="fas fa-star text-[#facc15]"></i> Our Satisfied Customers
          </div>
        </div>
      </section>

      <section className="py-20 px-20 bg-white">
        <div className="text-left">
          <p className="text-xs text-[#9ca3af] uppercase font-semibold">Global</p>
          <h2 className="text-3xl font-bold mb-2">What We Offer</h2>
          <p className="text-[#475569] max-w-2xl">
            Our highly qualified global team is uniquely qualified to deliver
            high-performance sustainable landmark buildings through our
            integrated suite
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-10">
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="https://placehold.co/400x280"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-4">
              <p className="text-white font-semibold">Human Resource Services</p>
              <i className="fas fa-arrow-right ml-auto text-white"></i>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="https://placehold.co/400x280"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-4">
              <p className="text-white font-semibold">
                Finance Management Services
              </p>
              <i className="fas fa-arrow-right ml-auto text-white"></i>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="https://placehold.co/400x280"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-4">
              <p className="text-white font-semibold">Data Management Services</p>
              <i className="fas fa-arrow-right ml-auto text-white"></i>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="https://placehold.co/400x280"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-4">
              <p className="text-white font-semibold">
                Business Management Services
              </p>
              <i className="fas fa-arrow-right ml-auto text-white"></i>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="https://placehold.co/400x280"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-4">
              <p className="text-white font-semibold">Lead Management Services</p>
              <i className="fas fa-arrow-right ml-auto text-white"></i>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <button className="px-6 py-3 rounded-full border border-[#002a57] text-[#002a57] font-semibold flex items-center gap-2 mx-auto">
            View All <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </section>

      <div className="bg-[#00b3c8] text-white text-sm py-2 px-20 flex flex-wrap gap-4 justify-center">
        <span>FPS Global</span>
        <span>Featured Projects</span>
        <span>Consulting Services</span>
        <span>Qualified Global Team</span>
        <span>FPS Global</span>
        <span>Featured Projects</span>
        <span>Consulting Services</span>
        <span>Qualified Global Team</span>
      </div>

      <section className="py-20 px-20">
        <p className="text-xs text-[#9ca3af] uppercase font-semibold">Global</p>
        <h2 className="text-3xl font-bold mb-4">About Global</h2>
        <div className="flex gap-10">
          <div className="flex gap-4">
            <img src="https://placehold.co/200x200" className="rounded-xl" />
            <img src="https://placehold.co/200x200" className="rounded-xl" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Mission and Vision</h3>
            <p className="text-[#475569] mb-4">
              Our purpose is to support our clients in achieving their primary
              objectives in delivering flexible, healthy, fully tuned and
              functioning facilities that perform to the highest level for their
              occupants to allow them to be productive and successful.
            </p>
            <button className="px-6 py-3 rounded-full bg-[#002a57] text-white font-semibold">
              Read More
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-20 bg-[#f9fafb]">
        <p className="text-xs text-[#9ca3af] uppercase font-semibold">Global</p>
        <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
        <p className="text-[#475569] mb-10">
          Our highly qualified global team is uniquely qualified to deliver
          high-performance sustainable landmark buildings through our integrated
          suite
        </p>
        <div className="bg-white p-10 rounded-xl shadow text-center max-w-4xl mx-auto">
          <p className="text-[#334155] italic mb-6">
            “Wow, I am truly amazed by the impact [Your Product/Service Name]
            has had on my life…”
          </p>
          <div className="flex justify-center space-x-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-gray-300"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300"></span>
            <span className="w-3 h-3 rounded-full bg-[#002a57]"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300"></span>
          </div>
          <p className="font-semibold text-[#002a57]">Sean Smith</p>
          <p className="text-sm text-gray-500">Locavore Pvt. Ltd</p>
        </div>
      </section>

      <section className="py-20 px-20">
        <p className="text-xs text-[#9ca3af] uppercase font-semibold">News</p>
        <h2 className="text-3xl font-bold mb-4">Latest News</h2>
        <p className="text-[#475569] mb-10 max-w-2xl">
          Our highly qualified global team is uniquely qualified to deliver
          high-performance sustainable landmark buildings through our integrated
          suite
        </p>
        <div className="grid grid-cols-3 gap-6">
          <div className="border rounded-xl p-6">
            <img src="https://placehold.co/400x200" className="rounded-lg mb-4" />
            <p className="text-lg font-semibold mb-2">
              Understanding the Benefits of Business Consulting
            </p>
            <p className="text-sm text-gray-500 mb-2">
              by Austin King • 5 Jan, 2023
            </p>
            <button className="text-[#002a57] font-semibold">Read More</button>
          </div>
          <div className="border rounded-xl p-6">
            <img src="https://placehold.co/400x200" className="rounded-lg mb-4" />
            <p className="text-lg font-semibold mb-2">
              Top 5 Signs Your Business Needs a Consultant
            </p>
            <p className="text-sm text-gray-500 mb-2">
              by Austin King • 5 Jan, 2023
            </p>
            <button className="text-[#002a57] font-semibold">Read More</button>
          </div>
          <div className="border rounded-xl p-6">
            <img src="https://placehold.co/400x200" className="rounded-lg mb-4" />
            <p className="text-lg font-semibold mb-2">
              The Role of Business Consultants in Digital Transformation
            </p>
            <p className="text-sm text-gray-500 mb-2">
              by Austin King • 5 Jan, 2023
            </p>
            <button className="text-[#002a57] font-semibold">Read More</button>
          </div>
        </div>
        <div className="text-center mt-10">
          <button className="px-6 py-3 rounded-full border border-[#002a57] text-[#002a57] font-semibold flex items-center gap-2 mx-auto">
            View All <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </section>

      <section className="py-12 px-20 bg-white text-center">
        <h3 className="text-xl font-semibold mb-6">Our Clients</h3>
        <div className="flex flex-wrap justify-center gap-10 grayscale">
          <img src="https://placehold.co/100x40?text=Oracle" />
          <img src="https://placehold.co/100x40?text=MTN" />
          <img src="https://placehold.co/100x40?text=Dell" />
          <img src="https://placehold.co/100x40?text=BCG" />
          <img src="https://placehold.co/100x40?text=SanchoBBDO" />
          <img src="https://placehold.co/100x40?text=TATA" />
        </div>
      </section>
    </div>
    )
}

export default Home;