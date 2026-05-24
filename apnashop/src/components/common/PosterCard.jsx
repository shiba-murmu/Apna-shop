function PosterCard({ poster }) {
    return (
        <div
            className={`group relative overflow-hidden rounded-2xl bg-[#F1F5F9] ${poster.height}`}
        >
            {/* Image */}

            <img
                src={poster.image}
                alt={poster.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

            {/* Content */}

            <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5">
                {/* Tag */}

                {poster.tag && (
                    <div className="mb-3 w-fit rounded-full bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-white backdrop-blur-sm">
                        {poster.tag}
                    </div>
                )}

                {/* Title */}

                <h2 className="max-w-xs text-lg font-bold leading-tight text-white sm:text-xl lg:text-2xl">
                    {poster.title}
                </h2>

                {/* Description */}

                {poster.description && (
                    <p className="mt-2 max-w-sm text-xs leading-6 text-slate-200 sm:text-sm">
                        {poster.description}
                    </p>
                )}

                {/* Button */}

                {poster.button && (
                    <button className="mt-4 rounded-xl bg-white px-4 py-2 text-xs font-semibold text-slate-900 sm:px-5 sm:py-3 sm:text-sm">
                        {poster.button}
                    </button>
                )}
            </div>
        </div>
    )
}

export default PosterCard