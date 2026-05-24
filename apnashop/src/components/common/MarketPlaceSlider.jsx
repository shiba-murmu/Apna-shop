import { useEffect, useRef, useState } from "react"

const bannerImages = [
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1400&auto=format&fit=crop",
]

const categories = [
    {
        id: 1,
        title: "College Ready",
        image:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=500&auto=format&fit=crop",
    },

    {
        id: 2,
        title: "Tshirts",
        image:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500&auto=format&fit=crop",
    },

    {
        id: 3,
        title: "Jeans",
        image:
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=500&auto=format&fit=crop",
    },

    {
        id: 4,
        title: "Sports Shoes",
        image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500&auto=format&fit=crop",
    },

    {
        id: 5,
        title: "Watches",
        image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500&auto=format&fit=crop",
    },

    {
        id: 6,
        title: "Kids Clothing",
        image:
            "https://images.unsplash.com/photo-1519238359922-989348752efb?q=80&w=500&auto=format&fit=crop",
    },

    {
        id: 7,
        title: "Luggage",
        image:
            "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?q=80&w=500&auto=format&fit=crop",
    },

    {
        id: 8,
        title: "Kurtas",
        image:
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=500&auto=format&fit=crop",
    },

    {
        id: 9,
        title: "Backpacks",
        image:
            "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=500&auto=format&fit=crop",
    },

    {
        id: 10,
        title: "Jewellery",
        image:
            "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=500&auto=format&fit=crop",
    },
]

function MarketplaceSlider() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const intervalRef = useRef(null)

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === bannerImages.length - 1 ? 0 : prev + 1
            )
        }, 4000)

        return () => clearInterval(intervalRef.current)
    }, [])

    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-4">
            {/* Main Slider */}

            <div className="overflow-hidden rounded-2xl bg-white">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                >
                    {bannerImages.map((image, index) => (
                        <div
                            key={index}
                            className="relative min-w-full"
                        >
                            <div className="relative aspect-[16/8] w-full overflow-hidden  sm:aspect-[16/7] lg:aspect-[16/6]">
                                <img
                                    src={image}
                                    alt=""
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>

                            {/* Overlay */}

                            <div className="absolute inset-0 bg-black/20"></div>

                            {/* Content */}

                            <div className="absolute inset-0 flex items-center">
                                <div className="px-5 sm:px-10 lg:px-14">
                                    {/* <div className="w-fit rounded-full bg-white/10 px-3 py-2 text-[10px] font-medium text-white backdrop-blur-sm sm:text-xs">
                                        Trending Marketplace Deals
                                    </div> */}

                                    <h2 className="mt-4 max-w-xl text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                                        Explore trending products with verified sellers.
                                    </h2>

                                    {/* <button className="mt-6 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900">
                                        Explore Now
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dots */}

                <div className="flex items-center justify-center gap-2 py-4">
                    {bannerImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index
                                ? "w-8 bg-slate-900"
                                : "w-2 bg-slate-300"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Categories */}

            <div className="mt-5 overflow-x-auto">
                <div className="flex gap-4 pb-2">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="min-w-[90px] cursor-pointer"
                        >
                            {/* Image */}

                            <div className="overflow-hidden rounded-2xl bg-[#F8FAFC]">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="h-24 w-24 object-cover sm:h-28 sm:w-28"
                                />
                            </div>

                            {/* Title */}

                            <p className="mt-2 line-clamp-2 text-center text-xs font-medium text-slate-700 sm:text-sm">
                                {category.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MarketplaceSlider