import {HiChevronRight} from "react-icons/hi";

const MobileSubMenu = ({ menu, openSubMenu }) => {
    return (
        <div>
            {menu.map((subItem, index) => (
                <div key={index} className="cursor-pointer flex items-center justify-between"
                     onClick={() => {
                         if (subItem.children && subItem.children.length > 0) {
                             openSubMenu(subItem.children);
                         }
                     }}
                >
                    <p
                        className="text-lg w-full"
                    >
                        {subItem.label}
                    </p>
                    {subItem.children && subItem.children.length > 0 && (
                        <HiChevronRight className="text-lg" />
                    )}
                </div>
            ))}
        </div>
    );
};

export default MobileSubMenu;
