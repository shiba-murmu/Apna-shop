import MarketplaceSlider from "../../components/common/MarketPlaceSlider"
import ProductCard from "../../components/common/ProductCard"
import PosterCard from '../../components/common/PosterCard'

function Home() {

    const posters = [
        {
            id: 1,
            title: "Trending Fashion Collection",
            description:
                "Explore verified fashion products from trusted sellers.",
            button: "Explore Now",
            tag: "Fashion",
            height: "h-[260px] sm:h-[320px] lg:h-[420px]",
            image:
                "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop",
        },

        {
            id: 2,
            title: "Verified Used Phones",
            description:
                "Second-hand phones inspected before listing.",
            button: "View Products",
            tag: "Used Marketplace",
            height: "h-[220px] sm:h-[280px]",
            image:
                "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
        },

        {
            id: 3,
            title: "Gaming Accessories",
            description:
                "Top gaming products from trusted sellers.",
            button: "Explore",
            tag: "Gaming",
            height: "h-[340px] sm:h-[500px]",
            image:
                "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1200&auto=format&fit=crop",
        },

        {
            id: 4,
            title: "Home Furniture",
            description:
                "Modern furniture collection for your home.",
            button: "Discover",
            tag: "Furniture",
            height: "h-[240px] sm:h-[300px]",
            image:
                "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
        },
    ]

    const featuredProducts = [
        {
            id: 1,
            brand: "MANYAVAR",
            title: "Men Self Design Linen Straight Kurta",
            price: "4,749",
            originalPrice: "4,999",
            discount: 5,
            offer: "214",
            rating: "4.7",
            reviews: "3",
            image:
                "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1200&auto=format&fit=crop",
        },

        {
            id: 2,
            brand: "PETER ENGLAND",
            title: "Men Solid Pure Cotton Kurta",
            price: "1,499",
            originalPrice: "1,799",
            discount: 16,
            offer: "888",
            rating: "4",
            reviews: "135",
            image:
                "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?q=80&w=1200&auto=format&fit=crop",
        },

        {
            id: 3,
            brand: "Snitch",
            title: "Men Solid Cotton Linen Straight Kurta",
            price: "1,499",
            originalPrice: "1,899",
            discount: 21,
            offer: "399",
            rating: "4.6",
            reviews: "8",
            image:
                "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1200&auto=format&fit=crop",
        },

        {
            id: 4,
            brand: "FORKEY",
            title: "Women Dupatta Casual Wear",
            price: "1,279",
            originalPrice: "2,226",
            discount: 42,
            offer: "199",
            rating: "4.1",
            reviews: "1352",
            image:
                "https://m.media-amazon.com/images/I/51J3ESYGDGL._SY679_.jpg",
        },

        {
            id: 5,
            brand: "JAHANTEXTILE",
            title: "Pure Cotton Embroidered Kurta",
            price: "214",
            originalPrice: "799",
            discount: 74,
            offer: "99",
            rating: "4.3",
            reviews: "84",
            image:
                "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1200&auto=format&fit=crop",
        },

        {
            id: 6,
            brand: "House of Pataudi",
            title: "Men Embroidered Kurta",
            price: "1,117",
            originalPrice: "4,999",
            discount: 77,
            offer: "299",
            rating: "4.5",
            reviews: "274",
            image:
                "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?q=80&w=1200&auto=format&fit=crop",
        },
        {
            id: 7,
            brand: "MANYAVAR",
            title: "Men Self Design Linen Straight Kurta",
            price: "4,749",
            originalPrice: "4,999",
            discount: 5,
            offer: "214",
            rating: "4.7",
            reviews: "3",
            image:
                "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1200&auto=format&fit=crop",
        },
        {
            id: 8,
            brand: "PETER ENGLAND",
            title: "Men Solid Pure Cotton Kurta",
            price: "1,499",
            originalPrice: "1,799",
            discount: 16,
            offer: "888",
            rating: "4",
            reviews: "135",
            image:
                "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?q=80&w=1200&auto=format&fit=crop",
        },
        {
            id: 9,
            brand: "Snitch",
            title: "Men Solid Cotton Linen Straight Kurta",
            price: "1,499",
            originalPrice: "1,899",
            discount: 21,
            offer: "399",
            rating: "4.6",
            reviews: "8",
            image:
                "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1200&auto=format&fit=crop",
        },

        {
            id: 10,
            brand: "FORKEY",
            title: "Women Dupatta Casual Wear",
            price: "1,279",
            originalPrice: "2,226",
            discount: 42,
            offer: "199",
            rating: "4.1",
            reviews: "1352",
            image:
                "https://m.media-amazon.com/images/I/51J3ESYGDGL._SY679_.jpg",
        },

        {
            id: 11,
            brand: "JAHANTEXTILE",
            title: "Pure Cotton Embroidered Kurta",
            price: "214",
            originalPrice: "799",
            discount: 74,
            offer: "99",
            rating: "4.3",
            reviews: "84",
            image:
                "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1200&auto=format&fit=crop",
        },

        {
            id: 12,
            brand: "House of Pataudi",
            title: "Men Embroidered Kurta",
            price: "1,117",
            originalPrice: "4,999",
            discount: 77,
            offer: "299",
            rating: "4.5",
            reviews: "274",
            image:
                "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?q=80&w=1200&auto=format&fit=crop",
        },
        {
            id: 13,
            brand: "MANYAVAR",
            title: "Men Self Design Linen Straight Kurta",
            price: "4,749",
            originalPrice: "4,999",
            discount: 5,
            offer: "214",
            rating: "4.7",
            reviews: "3",
            image:
                "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1200&auto=format&fit=crop",
        },
        {
            id: 14,
            brand: "PETER ENGLAND",
            title: "Men Solid Pure Cotton Kurta",
            price: "1,499",
            originalPrice: "1,799",
            discount: 16,
            offer: "888",
            rating: "4",
            reviews: "135",
            image:
                "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?q=80&w=1200&auto=format&fit=crop",
        },
    ]

    const quickProducts = [
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
                "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
        },

        {
            id: 5,
            title: "Gaming Keyboard",
            image:
                "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1200&auto=format&fit=crop",
        },

        {
            id: 6,
            title: "Samsung S24 Ultra",
            image:
                "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1200&auto=format&fit=crop",
        },

        {
            id: 7,
            title: "Wooden Chair",
            image:
                "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
        },

        {
            id: 8,
            title: "Bluetooth Speaker",
            image:
                "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1200&auto=format&fit=crop",
        },
    ]

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            {/* Marketplace Slider */}

            <MarketplaceSlider />

            {/* Quick Marketplace Products */}

            <section className="w-full px-3 py-8 sm:px-4 lg:px-6">
                <div className="mx-auto max-w-[1600px]">
                    {/* Heading */}

                    <div className="mb-6 flex items-center justify-between">
                        <div>
                            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-blue-600">
                                Trending Products
                            </p>

                            <h2 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
                                Explore Marketplace
                            </h2>
                        </div>

                        <button className="text-sm font-medium text-blue-600">
                            View All
                        </button>
                    </div>

                    {/* Grid */}

                    <div className="grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-3 sm:gap-x-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
                        {quickProducts.map((product) => (
                            <div
                                key={product.id}
                                className="min-w-0 cursor-pointer"
                            >
                                {/* Image */}

                                <div className="overflow-hidden rounded-xl bg-[#F1F5F9]">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="aspect-[4/5] w-full object-cover transition duration-300 hover:scale-[1.02]"
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
                </div>
            </section>

            {/* Hero Banner */}

            <section className="w-full px-3 py-4 sm:px-4 lg:px-6">
                <div className="mx-auto max-w-[1600px]">
                    <div className="grid gap-4 lg:grid-cols-[2.2fr_1fr]">
                        {/* Main Banner */}

                        <div className="relative overflow-hidden rounded-2xl bg-slate-900">
                            <div className="relative w-full overflow-hidden rounded-2xl bg-slate-900">
                                {/* Background Image */}

                                <img
                                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop"
                                    alt=""
                                    className="absolute inset-0 h-full w-full object-cover opacity-40"
                                />

                                {/* Overlay */}

                                <div className="absolute inset-0 bg-black/30"></div>

                                {/* Content Wrapper */}

                                <div className="relative flex min-h-[320px] items-center sm:min-h-[420px] lg:min-h-[520px]">
                                    <div className="w-full max-w-3xl px-5 py-10 sm:px-8 lg:px-14">
                                        {/* Heading */}

                                        <h1 className="text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                                            Buy products from real sellers.
                                        </h1>

                                        {/* Description */}

                                        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base lg:text-lg">
                                            A transparent marketplace where buyers connect directly
                                            with verified product owners and trusted used-product
                                            sellers.
                                        </p>

                                        {/* Buttons */}

                                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                            <button className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900">
                                                Explore Marketplace
                                            </button>

                                            <button className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm">
                                                Sell Product
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side Cards */}

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
                </div>
            </section>

            {/* Featured Fashion Products */}

            <section className="w-full px-3 py-10 sm:px-4 lg:px-6">
                <div className="mx-auto max-w-[1600px]">
                    {/* Header */}

                    <div className="mb-6 flex items-center justify-between">
                        <div>
                            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-blue-600">
                                Featured Collection
                            </p>

                            <h2 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
                                Fashion Marketplace
                            </h2>
                        </div>

                        <button className="text-sm font-medium text-blue-600">
                            View All
                        </button>
                    </div>

                    {/* Product Cards */}

                    <div className="grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-3 sm:gap-x-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                        {featuredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="min-w-0"
                            >
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Poster */}
            <section className="w-full px-3 py-8 sm:px-4 lg:px-6">
                <div className="mx-auto max-w-[1600px]">
                    {/* Header */}

                    <div className="mb-6">
                        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-blue-600">
                            Marketplace Posters
                        </p>

                        <h2 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
                            Explore Categories
                        </h2>
                    </div>

                    {/* Masonry Grid */}

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {/* Large Poster */}

                        <div className="lg:col-span-2">
                            <PosterCard poster={posters[0]} />
                        </div>

                        {/* Small Posters */}

                        <PosterCard poster={posters[1]} />

                        <PosterCard poster={posters[2]} />

                        {/* Bottom Wide */}

                        <div className="sm:col-span-2 lg:col-span-4">
                            <PosterCard poster={posters[3]} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Marketplace Banner */}

            <section className="w-full px-3 py-4 sm:px-4 lg:px-6">
                <div className="mx-auto max-w-[1600px] overflow-hidden rounded-2xl bg-white">
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

            {/* Sellers */}

            <section className="w-full px-3 py-10 sm:px-4 lg:px-6">
                <div className="mx-auto max-w-[1600px]">
                    {/* Header */}

                    <div className="mb-6 flex items-center justify-between">
                        <div>
                            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-blue-600">
                                Verified Sellers
                            </p>

                            <h2 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
                                Local Marketplace Sellers
                            </h2>
                        </div>

                        <button className="text-sm font-medium text-blue-600">
                            View All
                        </button>
                    </div>

                    {/* Sellers Grid */}

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
                        {[1, 2, 3, 4, 5, 6].map((seller) => (
                            <div
                                key={seller}
                                className="rounded-2xl bg-white p-4"
                            >
                                <img
                                    src={`https://i.pravatar.cc/300?img=${seller + 10}`}
                                    alt=""
                                    className="h-20 w-20 rounded-2xl object-cover"
                                />

                                <h3 className="mt-4 line-clamp-1 text-sm font-semibold text-slate-900">
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
                </div>
            </section>
        </div>
    )
}

export default Home