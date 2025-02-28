import Image from "next/image";

export default function APlusSection() {
    return (
        <div className="w-full min-h-screen px-4 md:px-6">
            <div className="w-full flex flex-col items-center justify-center gap-5 mt-10">
                <p className="text-xs md:text-sm uppercase font-light">
                    Effortless Elegance
                </p>
                <h2 className="text-2xl md:text-4xl text-center font-logo">
                    SOFT NEUTRALS AND<br className="md:block hidden" /> UNDERSTATED LUXURY FABRICS
                </h2>
                <p className="text-xs md:text-sm text-center max-w-4xl">
                    Designed for the modern woman who values both style and sophistication,
                    this curated selection blends classic<br className="md:block hidden" /> silhouettes with contemporary
                    details. From perfectly tailored blazers to fluid silk blouses and elegant
                    midi<br className="md:block hidden" /> dresses, each piece is crafted with precision to elevate your
                    wardrobe for any occasion.
                </p>
            </div>

            <Image
                width={1000}
                height={1000}
                src="/aplus/1.png"
                alt=""
                className="w-full h-auto object-cover my-10"
            />
            <Image
                width={1000}
                height={1000}
                src="/aplus/2.png"
                alt=""
                className="w-full h-auto object-cover my-10"
            />
        </div>
    );
}
