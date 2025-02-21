"use client";

const ProductsContainer = ({ highlightText, title, subtitle, children }) => {
    return (
        <section className="text-center py-10 w-full px-8">
            {highlightText && (
                <p className="text-2xs sm:text-xs uppercase tracking-widest text-gray-500">{highlightText}</p>
            )}

            <h2 className="text-xl sm:text-3xl font-light mt-2 font-logo">{title}</h2>

            {subtitle && <p className="text-sm text-gray-600 mt-2">{subtitle}</p>}

            <div className="mt-6">{children}</div>
        </section>
    );
};

export default ProductsContainer;
