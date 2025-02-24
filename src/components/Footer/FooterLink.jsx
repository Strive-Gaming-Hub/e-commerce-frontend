import Link from "next/link";

export const FooterLink = ({ label, href }) => {
    return (
        <Link
            href={href}
            className="text-stone-700 text-xs font-medium cursor-pointer transition-colors duration-200"
        >
            {label}
        </Link>
    );
};