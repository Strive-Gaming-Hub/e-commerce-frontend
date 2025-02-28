import ProductGallery from "@/components/ProductGallery";
import ProductDetails from "@/components/ProductDetails";

export default function Page({params}) {

    return (
    <>
        <div className="w-full min-h-screen mt-32 px-10">
            <div className="w-full flex items-start justify-between gap-5">
                <ProductGallery />
                <ProductDetails />
            </div>
        </div>
        <hr className="my-4" />
    </>
    )
}