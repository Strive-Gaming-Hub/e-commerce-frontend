import Image from "next/image";

export default function APlusSection() {
    return (
        <div className="w-full min-h-screen">
            <div className="w-full flex flex-col items-center justify-center gap-5 mt-10">
                <p className="text-xs uppercase font-light">Effortless Elegance</p>
                <h2 className="text-4xl text-center font-logo">SOFT NEUTRALS AND<br /> UNDERSTATED LUXURY FABRICS</h2>
                <p className="text-sm text-center">Designed for the modern woman who values both style and sophistication, this curated selection blends classic<br/> silhouettes with contemporary details. From perfectly tailored blazers to fluid silk blouses and elegant midi<br/> dresses, each piece is crafted with precision to elevate your wardrobe for any occasion.</p>
            </div>
            <Image width={1000} height={1000} src="/aplus/1.png" alt="" className="w-full h-auto object-cover my-10" />
            <Image width={1000} height={1000} src="/aplus/2.png" alt="" className="w-full h-auto object-cover my-10" />
        </div>
    )
}