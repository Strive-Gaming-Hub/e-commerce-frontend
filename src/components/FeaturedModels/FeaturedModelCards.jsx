export default function FeaturedModelCards({featuredData}) {

    console.log(featuredData);

    return (
        <div className="w-full h-[600px] relative">
            <div className="w-full h-full bg-gray-300"></div>
            <div className="absolute bottom-5 text-white z-20 uppercase px-5 flex flex-col gap-2">
                <p className="text-xs font-medium">{featuredData.highlight}</p>
                <h4 className="text-4xl font-medium font-logo">{featuredData.title}</h4>
            </div>
        </div>
    )
}