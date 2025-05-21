import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <div className="bg-[#00b3c8] text-white text-sm py-3 text-center">
                info@global.com &nbsp; • &nbsp; +01 123 456 789 &nbsp; • &nbsp; Network, United States &nbsp; • &nbsp; info@global.com &nbsp; • &nbsp; +01 123 456 789
            </div>

            <div className="bg-[#002a57] text-white text-sm px-20 pt-12 pb-6">
                <div className="flex justify-between flex-wrap gap-10">
                <div className="max-w-sm">
                    <h4 className="text-xl font-semibold mb-4">Logosipsum</h4>
                    <p className="mb-2">
                    FPC provides highly specialized facility life cycle integrated
                    consulting services for the Built Environment.
                    </p>
                    <p className="mb-2">info@global.com</p>
                    <p className="mb-2">+01 123 456 789</p>
                    <div className="flex gap-4 mt-4 text-lg">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin-in"></i>
                    <i className="fab fa-instagram"></i>
                    </div>
                </div>

                <div>
                    <h5 className="font-semibold mb-4">Menu</h5>
                    <ul className="space-y-2">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/blogs">Blog</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-semibold mb-4">Quick Links</h5>
                    <ul className="space-y-2">
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Disclaimer</li>
                    <li>Sitemap</li>
                    </ul>
                </div>
                </div>

                <div className="mt-12 border-t border-white/20 pt-4 text-center text-white/70">
                Copyright © 2025, Global Pvt. Ltd
                </div>
            </div>
        </footer>
    );
}
export default Footer;