import Link from "next/link";

const Services = () => {
    return (
        <>
            <section className="bg-gradient-to-br from-[#002a57] to-[#0097b2] text-white px-20 py-20">
                <h1 className="text-4xl font-bold mb-2">Services</h1>
                <p className="text-sm text-white/80">Home / Services</p>
            </section>

            <section className="py-20 px-20">
                <div className="grid grid-cols-3 gap-6">
                    <div className="relative rounded-xl overflow-hidden group">
                        <img src="https://placehold.co/400x250" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/30 flex items-end p-4 justify-between text-white">
                            <Link href="/service/test" className="font-semibold">Human Resource Services</Link>
                            <i className="fas fa-arrow-right text-white"></i>
                        </div>
                    </div>

                    <div className="relative rounded-xl overflow-hidden group">
                        <img src="https://placehold.co/400x250" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/30 flex items-end p-4 justify-between text-white">
                            <Link href="/service/test" className="font-semibold">Finance Management Services</Link>
                            <i className="fas fa-arrow-right text-white"></i>
                        </div>
                    </div>

                    <div className="relative rounded-xl overflow-hidden group">
                        <img src="https://placehold.co/400x250" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/30 flex items-end p-4 justify-between text-white">
                            <Link href="/service/test" className="font-semibold">Data Management Services</Link>
                            <i className="fas fa-arrow-right text-white"></i>
                        </div>
                    </div>

                    <div className="relative rounded-xl overflow-hidden group">
                        <img src="https://placehold.co/400x250" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/30 flex items-end p-4 justify-between text-white">
                            <Link href="/service/test" className="font-semibold">Business Management Services</Link>
                            <i className="fas fa-arrow-right text-white"></i>
                        </div>
                    </div>

                    <div className="relative rounded-xl overflow-hidden group">
                        <img src="https://placehold.co/400x250" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/30 flex items-end p-4 justify-between text-white">
                            <Link href="/service/test" className="font-semibold">Lead Management Services</Link>
                            <i className="fas fa-arrow-right text-white"></i>
                        </div>
                    </div>

                    <div className="relative rounded-xl overflow-hidden group">
                        <img src="https://placehold.co/400x250" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/30 flex items-end p-4 justify-between text-white">
                            <Link href="/service/test" className="font-semibold">Risk Management Services</Link>
                            <i className="fas fa-arrow-right text-white"></i>
                        </div>
                    </div>

                    <div className="relative rounded-xl overflow-hidden group">
                        <img src="https://placehold.co/400x250" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/30 flex items-end p-4 justify-between text-white">
                            <Link href="/service/test" className="font-semibold">IT/Software Services</Link>
                            <i className="fas fa-arrow-right text-white"></i>
                        </div>
                    </div>

                    <div className="relative rounded-xl overflow-hidden group">
                        <img src="https://placehold.co/400x250" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/30 flex items-end p-4 justify-between text-white">
                            <Link href="/service/test" className="font-semibold">Network Management Services</Link>
                            <i className="fas fa-arrow-right text-white"></i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Services;