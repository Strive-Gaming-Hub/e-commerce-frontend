import React from "react";
import { IoIosStarOutline } from "react-icons/io";
import { IoStarSharp } from "react-icons/io5";

const StarRating = ({ rating }) => {
    const maxStars = 5;
    return (
        <div className="flex space-x-1">
            {Array.from({ length: maxStars }, (_, index) =>
                index < rating ? (
                    <IoStarSharp key={index} className="text-amber-500" />
                ) : (
                    <IoIosStarOutline key={index} className="text-gray-400" />
                )
            )}
        </div>
    );
};

export default StarRating;
