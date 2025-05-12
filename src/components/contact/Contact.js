const Contact = () => {
    return (
        <>
        <section className="bg-gradient-to-br from-[#002a57] to-[#0097b2] text-white px-20 py-20">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-sm text-white/80">Home / Contact Us</p>
    </section>
            <section className="px-20 py-20 grid grid-cols-2 gap-20">
        <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-[#475569] mb-8">We love to hear from you, so if there's anything you'd like to ask us, we're right here and ready to help in every way we can.</p>
            <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Enter Your Name" className="border border-gray-300 rounded-md p-3 w-full" />
                    <input type="email" placeholder="Enter Your Email" className="border border-gray-300 rounded-md p-3 w-full" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Enter Your Phone Number" className="border border-gray-300 rounded-md p-3 w-full" />
                    <input type="text" placeholder="Enter Your Subject" className="border border-gray-300 rounded-md p-3 w-full" />
                </div>
                <textarea placeholder="Write Your Message Here" className="border border-gray-300 rounded-md p-3 w-full h-32 resize-none"></textarea>
                <button className="bg-[#002a57] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2">
                    Submit <i className="fas fa-arrow-right"></i>
                </button>
            </form>
        </div>
        <div className="space-y-8">
            <div>
                <h3 className="text-lg font-semibold mb-2">WORKING HOURS</h3>
                <p className="text-[#475569]">Monday — Friday, 9:00am — 5:00pm PST.</p>
            </div>
            <div className="space-y-2 text-sm text-[#475569]">
                <p><i className="fas fa-envelope mr-2 text-[#00b3c8]"></i> uixucean@gmail.com</p>
                <p><i className="fas fa-phone mr-2 text-[#00b3c8]"></i> +91 95744 68870</p>
                <p><i className="fas fa-map-marker-alt mr-2 text-[#00b3c8]"></i> Ahmedabad, India</p>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2">JOIN US</h3>
                <p className="text-[#475569] mb-3">We are happily open now for collaboration. You can ask any questions and offer problems by phone, email, Instagram or Facebook.</p>
                <div className="flex gap-4 text-[#00b3c8] text-lg">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin-in"></i>
                </div>
            </div>
        </div>
    </section>

    <section className="px-20 pb-20">
        <img src="https://placehold.co/1300x400?text=Map+Placeholder" className="w-full rounded-xl border" />
    </section>
        </>
    );
}

export default Contact;