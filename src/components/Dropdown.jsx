import { Menu, MenuItem, UnstyledButton } from "@mantine/core";
import {CgChevronDown} from "react-icons/cg";

const Dropdown = ({ label, items }) => {
    return (
        <Menu shadow="md" width={200}>
            <Menu.Target>
                <UnstyledButton className="flex items-center gap-1 group relative">
                    <p className="text-sm font-semibold">{label}</p>
                    <CgChevronDown className="relative top-0.5" />
                    <div className="nav-link-animation"></div>
                </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
                {items.map((item, index) => (
                    <MenuItem key={index}>{item}</MenuItem>
                ))}
            </Menu.Dropdown>
        </Menu>
    );
};

export default Dropdown;
