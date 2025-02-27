import FilterSidebar from "@/components/Filters/FilterSidebar";

export default function Page({params}) {

    const { collectionName } = params;

    return (
        <div className="w-full flex flex-col items-start justify-between">
            <div className="w-full md:mt-32"></div>
            <div className="w-full flex items-start justify-between">
                <FilterSidebar />
                <div className="w-full min-h-screen p-5">{collectionName}</div>
            </div>
        </div>
    )
}