const Blog = () => {
    return(
        <>
            <section className="bg-gradient-to-br from-[#002a57] to-[#0097b2] text-white px-20 py-20">
                <h1 className="text-4xl font-bold mb-4">Top 5 Signs Your Business Needs a Consultant</h1>
                <p className="text-sm text-white/80">
                    <i className="fas fa-user mr-1 text-[#00e0d0]"></i> Austin King &nbsp; • &nbsp; 10 Jan, 2023
                </p>
            </section>

            <section className="px-20 py-20 max-w-4xl mx-auto">
                <img src="https://placehold.co/1000x400" className="rounded-xl mb-10" />

                <p className="text-[#475569] mb-6">
                    Home is where the heart is, and your decor should reflect your personality and create a welcoming atmosphere. Whether you’re moving into a new place or just looking to refresh your existing space, there are countless ways to infuse style and comfort into your home. Here are some top tips to elevate your decor and make your home feel uniquely yours.
                </p>

                <h2 className="font-semibold text-lg mb-2">1. Choose a Color Palette</h2>
                <p className="text-[#475569] mb-6">
                    The first step in creating a cohesive look is selecting a color palette. Start with a base color and then choose complementary hues...
                </p>

                <h2 className="font-semibold text-lg mb-2">2. Mix Textures</h2>
                <p className="text-[#475569] mb-6">
                    Incorporating a variety of textures adds depth and interest to your decor. Combine smooth, sleek surfaces with rougher materials...
                </p>

                <h2 className="font-semibold text-lg mb-2">3. Incorporate Personal Touches</h2>
                <p className="text-[#475569] mb-6">
                    Your home should tell your story. Incorporate personal items that reflect your interests and experiences...
                </p>

                <h2 className="font-semibold text-lg mb-2">4. Create Functional Spaces</h2>
                <p className="text-[#475569] mb-6">
                    As we spend more time at home, creating functional spaces is essential. Designate areas for work, relaxation, and hobbies...
                </p>

                <h2 className="font-semibold text-lg mb-2">5. Invest in Key Pieces</h2>
                <p className="text-[#475569] mb-6">
                    While it’s tempting to fill your space with trendy decor, investing in a few quality key pieces can elevate your home’s overall aesthetic...
                </p>

                <h2 className="font-semibold text-lg mb-2">Conclusion</h2>
                <p className="text-[#475569] mb-10">
                    Home decor is a beautiful journey of self-expression and creativity. By implementing these tips, you can transform your space into a stylish and inviting sanctuary...
                </p>

                <div className="flex justify-between items-center flex-wrap gap-4 border-t pt-6">
                    <div className="flex gap-2 flex-wrap">
                        <span className="text-sm text-[#475569] font-semibold">TAGS</span>
                        <span className="bg-[#f1f5f9] text-sm text-[#0F172A] px-3 py-1 rounded-full">Home Decor</span>
                        <span className="bg-[#f1f5f9] text-sm text-[#0F172A] px-3 py-1 rounded-full">Furniture</span>
                        <span className="bg-[#f1f5f9] text-sm text-[#0F172A] px-3 py-1 rounded-full">Interior Design</span>
                        <span className="bg-[#f1f5f9] text-sm text-[#0F172A] px-3 py-1 rounded-full">Shop</span>
                    </div>
                    <div className="flex gap-4 text-[#00b3c8] text-lg">
                        <span className="text-sm font-semibold text-[#475569]">SHARE</span>
                        <i className="fab fa-facebook-f cursor-pointer"></i>
                        <i className="fab fa-pinterest cursor-pointer"></i>
                        <i className="fab fa-instagram cursor-pointer"></i>
                        <i className="fab fa-twitter cursor-pointer"></i>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog;