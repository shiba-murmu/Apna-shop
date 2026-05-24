function Footer() {
    return (
        <footer className="mt-10 border-t border-slate-200 bg-white">
            {/* Main Footer */}

            <div className="mx-auto max-w-[1600px] px-4 py-10 sm:px-6 lg:px-8">
                {/* Top Section */}

                <div className="grid gap-10 border-b border-slate-200 pb-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
                    {/* Brand */}

                    <div>
                        {/* Logo */}

                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white">
                                A
                            </div>

                            <div>
                                <h2 className="text-xl font-bold tracking-tight text-slate-900">
                                    Apna Shop
                                </h2>

                                <p className="text-xs text-slate-500">
                                    Trusted Marketplace
                                </p>
                            </div>
                        </div>

                        {/* Description */}

                        <p className="mt-6 max-w-sm text-sm leading-7 text-slate-500">
                            A transparent marketplace where buyers and sellers connect
                            directly through trusted profiles, verified products, and safer
                            shopping experiences.
                        </p>

                        {/* App Buttons */}

                        <div className="mt-6 flex flex-wrap gap-3">
                            <button className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
                                Download App
                            </button>

                            <button className="rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                                Become Seller
                            </button>
                        </div>
                    </div>

                    {/* Marketplace */}

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-900">
                            Marketplace
                        </h3>

                        <div className="mt-5 space-y-4">
                            <button className="block text-sm text-slate-500 transition hover:text-slate-900">
                                Mobiles
                            </button>

                            <button className="block text-sm text-slate-500 transition hover:text-slate-900">
                                Fashion
                            </button>

                            <button className="block text-sm text-slate-500 transition hover:text-slate-900">
                                Electronics
                            </button>

                            <button className="block text-sm text-slate-500 transition hover:text-slate-900">
                                Furniture
                            </button>

                            <button className="block text-sm text-slate-500 transition hover:text-slate-900">
                                Accessories
                            </button>
                        </div>
                    </div>

                    {/* Used Marketplace */}

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-900">
                            Used Products
                        </h3>

                        <div className="mt-5 space-y-4">
                            <button className="block text-sm text-slate-500 transition hover:text-slate-900">
                                Used Phones
                            </button>

                            <button className="block text-sm text-slate-500 transition hover:text-slate-900">
                                Used Laptops
                            </button>

                            <button className="block text-sm text-slate-500 transition hover:text-slate-900">
                                Used Furniture
                            </button>

                            <button className="block text-sm text-slate-500 transition hover:text-slate-900">
                                Verified Devices
                            </button>

                            <button className="block text-sm text-slate-500 transition hover:text-slate-900">
                                Sell Old Product
                            </button>
                        </div>
                    </div>

                    {/* Company */}

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-900">
                            Company
                        </h3>

                        <div className="mt-5 space-y-4">
                            <button className="block text-sm text-slate-500 transition hover:text-slate-900">
                                About Us
                            </button>

                            <button className="block text-sm text-slate-500 transition hover:text-slate-900">
                                Careers
                            </button>

                            <button className="block text-sm text-slate-500 transition hover:text-slate-900">
                                Press
                            </button>

                            <button className="block text-sm text-slate-500 transition hover:text-slate-900">
                                Support
                            </button>

                            <button className="block text-sm text-slate-500 transition hover:text-slate-900">
                                Contact
                            </button>
                        </div>
                    </div>

                    {/* Policies */}

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-900">
                            Policies
                        </h3>

                        <div className="mt-5 space-y-4">
                            <button className="block text-sm text-slate-500 transition hover:text-slate-900">
                                Privacy Policy
                            </button>

                            <button className="block text-sm text-slate-500 transition hover:text-slate-900">
                                Terms & Conditions
                            </button>

                            <button className="block text-sm text-slate-500 transition hover:text-slate-900">
                                Seller Policy
                            </button>

                            <button className="block text-sm text-slate-500 transition hover:text-slate-900">
                                Refund Policy
                            </button>

                            <button className="block text-sm text-slate-500 transition hover:text-slate-900">
                                Verification Policy
                            </button>
                        </div>
                    </div>
                </div>

                {/* Middle Section */}

                <div className="grid gap-8 border-b border-slate-200 py-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Verified Marketplace */}

                    <div className="rounded-2xl bg-[#F8FAFC] p-5">
                        <h3 className="text-sm font-semibold text-slate-900">
                            Verified Sellers
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-slate-500">
                            Every seller goes through identity verification before listing
                            products.
                        </p>
                    </div>

                    {/* Secure Marketplace */}

                    <div className="rounded-2xl bg-[#F8FAFC] p-5">
                        <h3 className="text-sm font-semibold text-slate-900">
                            Secure Marketplace
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-slate-500">
                            Buyers can report suspicious products and fake marketplace
                            listings.
                        </p>
                    </div>

                    {/* Used Product */}

                    <div className="rounded-2xl bg-[#F8FAFC] p-5">
                        <h3 className="text-sm font-semibold text-slate-900">
                            Used Product Verification
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-slate-500">
                            Used devices are inspected before becoming available for sale.
                        </p>
                    </div>

                    {/* Community */}

                    <div className="rounded-2xl bg-[#F8FAFC] p-5">
                        <h3 className="text-sm font-semibold text-slate-900">
                            Community Driven
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-slate-500">
                            Building a safer online market with transparent buyer and seller
                            connections.
                        </p>
                    </div>
                </div>

                {/* Bottom Section */}

                <div className="flex flex-col gap-5 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    {/* Left */}

                    <p className="text-sm text-slate-500">
                        © 2026 Apna Shop. All rights reserved.
                    </p>

                    {/* Socials */}

                    <div className="flex items-center gap-3">
                        <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-100">
                            Instagram
                        </button>

                        <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-100">
                            Facebook
                        </button>

                        <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-100">
                            Twitter
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer