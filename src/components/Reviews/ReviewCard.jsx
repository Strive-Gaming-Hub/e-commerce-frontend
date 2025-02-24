import React from "react";
import StarRating from "./StarRating";

const ReviewCard = ({ review }) => {
    return (
        <div className="border max-w-2xs bg-white">
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-semibold">
                {review.image}
            </div>

            <div className="w-full flex flex-col items-start gap-2 p-3">
                <StarRating rating={review.rating} />

                <h3 className="font-semibold">{review.title}</h3>

                <p className="text-xs text-stone-600 text-left font-medium">{review.review}</p>

                <p className="text-xs text-gray-500 font-medium">{review.author}</p>
            </div>
        </div>
    );
};

export default ReviewCard;
