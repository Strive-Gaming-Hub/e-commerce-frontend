import React from "react";
import BlogCard from "./BlogCard";
import Button from "@/components/Button";

const blogPosts = [
    {
        id: 1,
        image: "",
        date: "November 24 2024",
        title: "Fashion Hacks to Look Expensive Without Spending Much",
        description:
            "Fashion often reflects our cultural mood, and vintage is making a comeback as we seek sustainability...",
    },
    {
        id: 2,
        image: "",
        date: "November 24 2024",
        title: "Fashion for Every Budget: Styling Tips That Don’t Break the Bank",
        description:
            "Looking stylish doesn’t have to come with a hefty price tag. With the right approach, you can look chic...",
    },
    {
        id: 3,
        image: "",
        date: "November 24 2024",
        title: "The Best Outfits for Every Occasion: From Work to Weekend",
        description:
            "Dressing appropriately for different occasions can feel like a balancing act, but with the right wardrobe staples...",
    },
];

const BlogSection = () => {
    return (
        <section className="w-full py-12 px-6">
            <div className="max-w-screen-2xl mx-auto mb-8">
                <h2 className="text-3xl font-medium font-logo">From The Journal</h2>
                <p className="text-gray-500">Latest news from Ascension!</p>
            </div>

            <div className="max-w-screen-2xl mx-auto">
                <div className="flex overflow-x-auto md:overflow-hidden gap-6 snap-x scroll-smooth custom-scrollbar md:scrollbar-hide">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="shrink-0 w-[90%] sm:w-[50%] md:w-1/2 lg:w-1/3">
                            <BlogCard post={post} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full flex items-center justify-center mt-6">
                <Button text="View All Posts" className="border-black text-black hover:bg-black hover:text-white" />
            </div>
        </section>
    );
};

export default BlogSection;
