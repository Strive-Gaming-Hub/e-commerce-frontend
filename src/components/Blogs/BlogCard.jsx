import React from "react";
import Image from "next/image";

const BlogCard = ({ post }) => {
    return (
        <div className="w-full bg-white snap-center shadow-sm">
            <div className="relative w-full h-80 bg-gray-200 flex items-center justify-center">
                {post.image ? (
                    <Image
                        src={post.image}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                    />
                ) : (
                    <span className="text-gray-500 text-sm">Image goes here</span>
                )}
            </div>

            <div className="w-[90%] p-4 bg-white relative bottom-10">
                <p className="text-xs font-medium text-stone-500 uppercase">{post.date}</p>
                <h3 className="text-xl font-medium font-logo mt-2">{post.title}</h3>
                <p className="text-sm font-medium text-gray-600 mt-2 line-clamp-3">{post.description}</p>
            </div>
        </div>
    );
};

export default BlogCard;
