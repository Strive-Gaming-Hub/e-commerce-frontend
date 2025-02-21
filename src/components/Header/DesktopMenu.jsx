import Dropdown from "./Dropdown";
import menuItems from "./menuData";

const DesktopMenu = () => {
    return (
        <div className="hidden md:flex w-full justify-center items-center py-4 px-6 gap-5">
            {menuItems.map((item, index) => (
                item.children && item.children.length > 0 ? (
                    <Dropdown key={index} label={item.label} items={item.children.map(subItem => subItem.label)} />
                ) : (
                    <p key={index} className="text-sm font-semibold cursor-pointer">{item.label}</p>
                )
            ))}
        </div>
    );
};

export default DesktopMenu;
