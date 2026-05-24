function Home() {
    // const categories = [
    //     "Mobiles",
    //     "Fashion",
    //     "Electronics",
    //     "Furniture",
    //     "Appliances",
    //     "Used Phones",
    //     "Accessories",
    //     "Gaming",
    // ]

    const products = [
        {
            id: 1,
            title: "iPhone 14 Pro Max",
            image:
                "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?q=80&w=1200&auto=format&fit=crop",
        },

        {
            id: 2,
            title: "Nike Sneakers",
            image:
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
        },

        {
            id: 3,
            title: "Sony Headphones",
            image:
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
        },

        {
            id: 4,
            title: "Macbook Air",
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUcN-7hdmb95aBDci42BZPPTmCEAw3PDEwwg&s",
        },

        {
            id: 5,
            title: "Wooden Chair",
            image:
                "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
        },

        {
            id: 6,
            title: "Samsung S24 Ultra",
            image:
                "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1200&auto=format&fit=crop",
        },

        {
            id: 7,
            title: "Gaming Keyboard",
            image:
                "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1200&auto=format&fit=crop",
            },
            
            {
                id: 8,
            title: "Office Lamp",
            image:
                "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1200&auto=format&fit=crop",
        },
        {
            id: 9,
            title: "Leather Jacket",
            image:
            "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1200&auto=format&fit=crop",
        },
        {
            id: 10,
            title: "4K Monitor",
            image:
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
        },
        {
            id: 11,
            title: "Bluetooth Speaker",
            image:
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
        },
        {
            id: 12,
            title: "Running Shoes",
            image:
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
        }
    ]

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            {/* Categories */}

            {/* <section className="border-b border-slate-200 bg-white">
                <div className="mx-auto flex max-w-7xl items-center gap-6 overflow-x-auto px-4 py-4 scrollbar-none">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className="whitespace-nowrap text-sm font-medium text-slate-600 transition hover:text-blue-600"
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section> */}

            {/* Hero Banner */}

            <section className="mx-auto px-4 py-10 lg:max-w-7xl">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-600">
                            Trending Products
                        </p>

                        <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                            Explore Marketplace
                        </h2>
                    </div>

                    <button className="text-sm font-medium text-blue-600">
                        View All
                    </button>
                </div>

                {/* Trending Products */}
                {/* Product Grid */}

                <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group cursor-pointer"
                        >
                            {/* Image */}

                            <div className="overflow-hidden rounded-2xl bg-[#F1F5F9]">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="aspect-[4/5] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                                />
                            </div>

                            {/* Info */}

                            <div className="mt-3 px-1">
                                <h3 className="line-clamp-1 text-sm font-medium text-slate-800">
                                    {product.title}
                                </h3>

                                <div className="mt-2 flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span>

                                    <p className="text-xs text-slate-500">
                                        Verified Seller
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mx-auto px-4 py-4 lg:max-w-7xl">
                <div className="grid gap-4 lg:grid-cols-[2.2fr_1fr]">
                    {/* Main Banner */}

                    <div className="relative overflow-hidden rounded-2xl bg-slate-900">
                        <img
                            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop"
                            alt=""
                            className="h-[340px] w-full object-cover opacity-40 sm:h-[420px] lg:h-[520px]"
                        />

                        <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-10 lg:p-14">
                            <div className="w-fit rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm sm:text-sm">
                                Trusted Community Marketplace
                            </div>

                            <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                                Buy products from real sellers.
                            </h1>

                            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base lg:text-lg">
                                A transparent marketplace where buyers connect directly with
                                verified product owners and trusted used-product sellers.
                            </p>

                            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                                <button className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900">
                                    Explore Marketplace
                                </button>

                                <button className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm">
                                    Sell Product
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                        <div className="rounded-2xl bg-blue-600 p-6 text-white">
                            <p className="text-sm text-blue-100">
                                Used Marketplace
                            </p>

                            <h2 className="mt-3 text-2xl font-bold leading-tight">
                                Verified Used Phones
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-blue-100">
                                Every used phone is inspected before listing.
                            </p>

                            <button className="mt-6 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-700">
                                Explore
                            </button>
                        </div>

                        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                            <img
                                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop"
                                alt=""
                                className="h-44 w-full object-cover"
                            />

                            <div className="p-5">
                                <p className="text-xs font-medium uppercase tracking-[0.15em] text-blue-600">
                                    Trusted Sellers
                                </p>

                                <h2 className="mt-3 text-xl font-bold leading-tight text-slate-900">
                                    Real Seller Profiles
                                </h2>

                                <p className="mt-3 text-sm leading-7 text-slate-500">
                                    Buyers can verify sellers before purchasing products.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Marketplace Banner */}

            <section className="mx-auto px-4 py-4 lg:max-w-7xl">
                <div className="overflow-hidden rounded-2xl bg-white">
                    <div className="grid items-center lg:grid-cols-2">
                        {/* Left */}

                        <div className="p-6 sm:p-10 lg:p-14">
                            <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-600">
                                Used Marketplace
                            </p>

                            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 lg:text-5xl">
                                Buy and sell trusted second-hand products.
                            </h2>

                            <p className="mt-6 max-w-xl text-sm leading-8 text-slate-500 sm:text-base">
                                Apna Shop verifies used devices through trusted sellers and
                                inspection reports so customers can shop safely without worrying
                                about duplicate or damaged products.
                            </p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <button className="rounded-xl bg-blue-600 px-6 py-4 text-sm font-medium text-white">
                                    Explore Used Products
                                </button>

                                <button className="rounded-xl border border-slate-200 px-6 py-4 text-sm font-medium text-slate-700">
                                    Sell Old Device
                                </button>
                            </div>
                        </div>

                        {/* Right */}

                        <div className="grid grid-cols-2 gap-3 p-4 sm:p-6">
                            <img
                                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop"
                                alt=""
                                className="h-48 w-full rounded-2xl object-cover sm:h-72"
                            />

                            <img
                                src="https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=1200&auto=format&fit=crop"
                                alt=""
                                className="h-48 w-full rounded-2xl object-cover sm:h-72"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Local Sellers */}

            <section className="mx-auto px-4 py-10 lg:max-w-7xl">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-600">
                            Verified Sellers
                        </p>

                        <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                            Local Marketplace Sellers
                        </h2>
                    </div>

                    <button className="text-sm font-medium text-blue-600">
                        View All
                    </button>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                    {[1, 2, 3, 4, 5].map((seller) => (
                        <div
                            key={seller}
                            className="rounded-2xl bg-white p-4"
                        >
                            <img
                                src={`https://i.pravatar.cc/300?img=${seller + 10}`}
                                alt=""
                                className="h-20 w-20 rounded-2xl object-cover"
                            />

                            <h3 className="mt-4 text-sm font-semibold text-slate-900">
                                Rahul Electronics
                            </h3>

                            <p className="mt-1 text-xs text-slate-500">
                                Jamshedpur
                            </p>

                            <div className="mt-3 flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>

                                <p className="text-xs text-slate-500">
                                    Verified Seller
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home