import { useEffect, useState } from "react"

function Navbar() {
    const categories = [
        "For You",
        "Fashion",
        "Mobiles",
        "Beauty",
        "Toys, Books",
        "Food & More",
        "Home & Kitchen",
        "Appliances",
        "Electronics",
        "Furniture",
        "Sports",
        "Used Phones",
        "Accessories",
        "Gaming",
    ]

    const [showTopNavbar, setShowTopNavbar] = useState(true)

    useEffect(() => {
        let lastScrollY = window.scrollY

        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Detect scroll direction properly
            if (
                currentScrollY > lastScrollY + 30 &&
                showTopNavbar
            ) {
                setShowTopNavbar(false)
            }

            else if (
                currentScrollY < lastScrollY - 30 &&
                !showTopNavbar
            ) {
                setShowTopNavbar(true)
            }

            lastScrollY = currentScrollY
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [showTopNavbar])

    return (
        <>
            {/* Desktop Top Header */}

            <div className="hidden border-b border-slate-200 bg-white lg:block">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
                    <div className="flex items-center gap-6 text-xs text-slate-500">
                        <p>Trusted community marketplace</p>
                        <p>Verified sellers only</p>
                    </div>

                    <div className="flex items-center gap-6 text-xs text-slate-500">
                        <button className="hover:text-slate-900">
                            Become Seller
                        </button>

                        <button className="hover:text-slate-900">
                            Support
                        </button>

                        <button className="hover:text-slate-900">
                            Download App
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}

            <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
                <div className="mx-auto max-w-7xl px-4">
                    {/* Top Row */}

                    <div
                        className={`overflow-hidden transition-all duration-300 ${showTopNavbar
                            ? "max-h-[120px] opacity-100 py-4"
                            : "max-h-0 opacity-0 py-0"
                            }`}
                    >
                        <div className="flex items-center justify-between">
                            {/* Logo */}

                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-base font-bold text-white">
                                    A
                                </div>

                                <div>
                                    <h1 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                                        Apna Shop
                                    </h1>

                                    <p className="text-[10px] text-slate-500 sm:text-xs">
                                        Trusted Marketplace
                                    </p>
                                </div>
                            </div>

                            {/* Actions */}

                            <div className="flex items-center gap-2 sm:gap-3">
                                <button className="rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-medium text-slate-700 transition hover:bg-slate-100 sm:px-5 sm:text-sm">
                                    Login
                                </button>

                                <button className="rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-medium text-white transition hover:bg-blue-700 sm:px-5 sm:text-sm">
                                    Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Search */}

                    <div className="pb-4">
                        <div className="flex h-12 items-center rounded-2xl border border-slate-200 bg-slate-50 px-4">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="h-full w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                            />
                        </div>
                    </div>

                    {/* Categories */}

                    <div className="scrollbar-none flex items-center gap-5 overflow-x-auto border-t border-slate-200 py-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className="whitespace-nowrap cursor-pointer text-sm font-medium text-slate-600 transition hover:text-blue-600"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar