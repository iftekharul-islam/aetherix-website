const About = () => {
    return(
      <div className=" mx-auto">

        <section className="bg-gradient-to-br from-[#002a57] to-[#0097b2] text-white px-20 py-20">
            <h1 className="text-4xl font-bold mb-2">About Us</h1>
            <p className="text-sm text-white/80">Home / About Us</p>
        </section>

        <section className="px-20 py-20">
            <div className="flex items-center gap-12">
                <div className="grid grid-cols-2 gap-4">
                    <img src="https://placehold.co/200x200" className="rounded-xl" />
                    <img src="https://placehold.co/200x200" className="rounded-xl" />
                </div>
                <div className="max-w-xl">
                    <h2 className="text-xl font-semibold mb-2">Mission and Vision</h2>
                    <p className="text-[#475569] mb-4">
                        Our purpose is to support our clients in achieving their primary objectives in delivering flexible, healthy, fully tuned and functioning facilities that perform to the highest level for their occupants to allow them to be productive and successful.
                    </p>
                    <button className="bg-[#002a57] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2">
                        Read More <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </section>

        <section className="px-20 pb-20">
            <div className="grid grid-cols-2 gap-12 items-start">
                <div>
                    <h2 className="text-xl font-semibold mb-2">Values</h2>
                    <p className="text-[#475569] mb-6">
                        When facilities are operating at optimal levels, they provide healthier environments that support health and well-being, are simpler, more efficient and cost much less to operate and maintain for the end user.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-[#f1f5f9] rounded-lg px-4 py-2 font-medium">Integrity</div>
                        <div className="bg-[#f1f5f9] rounded-lg px-4 py-2 font-medium">Diverse and Inclusive</div>
                        <div className="bg-[#f1f5f9] rounded-lg px-4 py-2 font-medium">Collaborative</div>
                        <div className="bg-[#f1f5f9] rounded-lg px-4 py-2 font-medium">Effective</div>
                    </div>
                    <button className="bg-[#002a57] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2">
                        Read More <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <img src="https://placehold.co/200x200" className="rounded-xl" />
                    <img src="https://placehold.co/200x200" className="rounded-xl" />
                </div>
            </div>
        </section>

        <section className="px-20 pb-20">
            <div className="flex items-center gap-12">
                <div className="grid grid-cols-2 gap-4">
                    <img src="https://placehold.co/200x200" className="rounded-xl" />
                    <img src="https://placehold.co/200x200" className="rounded-xl" />
                </div>
                <div className="max-w-xl">
                    <h2 className="text-xl font-semibold mb-2">Corporate Governance</h2>
                    <p className="text-[#475569] mb-4">
                        Our Senior Leadership team is pivotal to Corporate Governance which is set at the heart of our business. It plays an essential role in balancing the interests of all stakeholders such as our clients, employees and suppliers alike.
                    </p>
                    <button className="bg-[#002a57] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2">
                        Read More <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
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

        <section className="py-20 px-20 bg-[#f9fafb]">
            <p className="text-xs text-[#9ca3af] uppercase font-semibold">Global</p>
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-[#475569] mb-10">
                Our highly qualified global team is uniquely qualified to deliver high-performance sustainable landmark buildings through our integrated suite
            </p>
            <div className="bg-white p-10 rounded-xl shadow text-center max-w-4xl mx-auto">
                <p className="text-[#334155] italic mb-6">
                    “Wow, I am truly amazed by the impact [Your Product/Service Name] has had on my life. It completely transformed the way I manage my tasks and time…”
                </p>
                <div className="flex justify-center space-x-2 mb-4">
                    <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                    <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                    <span className="w-3 h-3 rounded-full bg-[#002a57]"></span>
                    <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                    <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                    <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                    <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                </div>
                <p className="font-semibold text-[#002a57]">Sean Smith</p>
                <p className="text-sm text-gray-500">Locavore Pvt. Ltd</p>
            </div>
        </section>

        <section className="py-20 px-20">
            <p className="text-xs text-[#9ca3af] uppercase font-semibold">Meet the Team</p>
            <h2 className="text-3xl font-bold mb-4">Leadership Team<br />Industry Experience</h2>
            <p className="text-[#475569] mb-10 max-w-2xl">
                Our highly qualified global team is uniquely qualified to deliver high-performance sustainable landmark buildings through our integrated suite
            </p>
            <div className="grid grid-cols-4 gap-6">
                <div className="text-center">
                    <img src="https://placehold.co/180x220" className="rounded-xl mb-4" />
                    <p className="font-semibold">Sean Smith</p>
                    <p className="text-sm text-gray-500">CEO, Tech Global</p>
                </div>
                <div className="text-center">
                    <img src="https://placehold.co/180x220" className="rounded-xl mb-4" />
                    <p className="font-semibold">Johnathan Doe</p>
                    <p className="text-sm text-gray-500">Managing Director, Tech Global</p>
                </div>
                <div className="text-center">
                    <img src="https://placehold.co/180x220" className="rounded-xl mb-4" />
                    <p className="font-semibold">Terry Wilson</p>
                    <p className="text-sm text-gray-500">Marketing Manager, Tech Global</p>
                </div>
                <div className="text-center">
                    <img src="https://placehold.co/180x220" className="rounded-xl mb-4" />
                    <p className="font-semibold">Susan Orhan</p>
                    <p className="text-sm text-gray-500">Tech Advisor, Tech Global</p>
                </div>
            </div>
        </section>
      </div>
    )
}

export default About;