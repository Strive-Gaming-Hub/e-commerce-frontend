import ReviewCard from "@/components/Reviews/ReviewCard";
import {reviews} from "@/components/Reviews/reviewsData";

export default function ReviewList() {
    return (
        <section className="px-8 py-10">
            <h2 className="text-xl sm:text-3xl font-light mt-2 font-logo">✨ Trusted by Thousands: 50,000+ 5-Star Reviews!</h2>
            <p className="text-sm text-gray-600 mt-2">Our customers have spoken, and they’re loving every moment of their shopping experience with us! With over 50,000 glowing 5-star reviews, it’s clear we’re more than just a fashion destination—we’re a brand you can trust.</p>
            <div className="w-full overflow-x-auto custom-scrollbar">
                <div className="py-4 flex flex-nowrap w-max justify-center gap-6">
                    {reviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>
            </div>
        </section>
    )
}