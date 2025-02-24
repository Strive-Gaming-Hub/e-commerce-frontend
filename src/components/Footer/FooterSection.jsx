import { FooterLink } from "./FooterLink";

export const FooterSection = ({ title, links }) => {
    return (
        <div className="flex flex-col gap-2">
            <h3 className="text-[#252525] font-semibold text-sm mb-2 uppercase">{title}</h3>
            {links.map((link, index) => (
                <FooterLink key={index} label={link.label} href={link.href} />
            ))}
        </div>
    );
};