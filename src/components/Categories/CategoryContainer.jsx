"use client";

import categoryData from "./categoryData";
import CategoryCard from "./CategoryCard";

const CategoryContainer = () => {
    return (
        <section className="w-full max-w-screen-2xl mx-auto px-4 md:px-8 py-10">
            <h2 className="text-2xl md:text-3xl font-medium text-center mb-6 font-logo">
                Shop by Category
            </h2>

            <div className="custom-scrollbar overflow-x-auto md:overflow-visible pb-3 md:pb-0">
                <div className="flex md:grid md:grid-cols-5 gap-4 flex-nowrap">
                    {categoryData.map((category) => (
                        <div key={category.id} className="min-w-[80%] sm:min-w-[60%] md:min-w-0">
                            <CategoryCard category={category} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryContainer;
