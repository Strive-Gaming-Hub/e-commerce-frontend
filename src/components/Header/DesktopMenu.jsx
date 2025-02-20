import menuItems from "./menuData";

const DesktopMenu = () => {
    return (
        <div className="hidden md:flex w-full justify-center items-center py-4 px-6 gap-5">
            {menuItems.map((item, index) => (
                <p key={index} className="cursor-pointer">{item.label}</p>
            ))}
        </div>
    );
};

export default DesktopMenu;
