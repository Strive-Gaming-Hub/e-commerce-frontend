const menuItems = [
    {
        label: "Clothing",
        children: [
            { label: "Men", children: [{ label: "Shirts" }, { label: "Pants" }] },
            { label: "Women", children: [{ label: "Dresses" }, { label: "Tops" }] },
            { label: "Kids", children: [] },
        ],
    },
    { label: "New arrivals", children: [] },
    {
        label: "Dresses",
        children: [
            { label: "Casual", children: [] },
            { label: "Formal", children: [] },
        ],
    },
    {
        label: "Outerwear",
        children: [
            { label: "Jackets", children: [] },
            { label: "Coats", children: [] },
        ],
    },
    { label: "Sale", children: [] },
    {
        label: "Features",
        children: [
            { label: "Best Sellers", children: [] },
            { label: "Trending", children: [] },
        ],
    },
    {
        label: "Pre-built templates",
        children: [{ label: "Modern" }, { label: "Classic" }],
    },
    { label: "Product styles", children: [{ label: "Minimal" }, { label: "Luxury" }] },
];

export default menuItems;
