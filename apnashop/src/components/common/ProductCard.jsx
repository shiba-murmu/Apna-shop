function ProductCard({ product }) {
    return (
        <div className="group cursor-pointer">
            {/* Product Image */}

            <div className="relative overflow-hidden rounded-xl bg-[#F1F5F9]">
                <img
                    src={product.image}
                    alt={product.title}
                    className="aspect-[4/5] w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />

                {/* Rating */}

                {product.rating && (
                    <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-md bg-white px-2 py-1 shadow-sm">
                        <span className="text-xs font-semibold text-slate-900">
                            {product.rating}
                        </span>

                        <span className="text-[10px] text-emerald-600">
                            ★
                        </span>

                        <span className="text-[10px] text-slate-500">
                            ({product.reviews})
                        </span>
                    </div>
                )}
            </div>

            {/* Product Info */}

            <div className="mt-2">
                {/* Brand */}

                <h3 className="line-clamp-1 text-sm font-semibold uppercase tracking-tight text-slate-900">
                    {product.brand}
                </h3>

                {/* Title */}

                <p className="line-clamp-1 text-sm text-slate-500">
                    {product.title}
                </p>

                {/* Price */}

                <div className="mt-1 flex flex-wrap items-center gap-2">
                    <span className="text-base font-bold text-slate-900">
                        ₹{product.price}
                    </span>

                    <span className="text-sm text-slate-400 line-through">
                        ₹{product.originalPrice}
                    </span>

                    <span className="text-sm font-medium text-emerald-600">
                        {product.discount}% off
                    </span>
                </div>

                {/* Offer */}

                <p className="mt-1 text-xs font-medium text-blue-600">
                    ₹{product.offer} with Bank offer
                </p>
            </div>
        </div>
    )
}

export default ProductCard