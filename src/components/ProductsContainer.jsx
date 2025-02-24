"use client";

import Button from "@/components/Button";
import {useRouter} from "next/navigation";

const ProductsContainer = ({ highlightText, title, subtitle, children, ctaText, ctaUrl }) => {

    const router = useRouter();

    return (
        <section className="text-center py-10 w-full px-8">
            {highlightText && (
                <p className="text-2xs sm:text-xs uppercase tracking-widest text-gray-500">{highlightText}</p>
            )}

            <h2 className="text-xl sm:text-3xl font-light mt-2 font-logo">{title}</h2>

            {subtitle && <p className="text-sm text-gray-600 mt-2">{subtitle}</p>}

            {children && <div className="my-6">{children}</div>}
            <Button text={ctaText} onClick={()=>router.push(ctaUrl)} className="border-black text-black hover:bg-black hover:text-white" />
        </section>
    );
};

export default ProductsContainer;
