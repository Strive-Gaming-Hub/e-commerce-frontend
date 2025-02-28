export const footerData = {
    sections: [
        {
            title: "COMPANY",
            links: [
                { label: "Our Story", href: "/our-story" },
                { label: "Careers", href: "/careers" },
                { label: "Press", href: "/press" },
                { label: "Influencers", href: "/influencers" },
                { label: "Find a store", href: "/find-a-store" },
            ],
        },
        {
            title: "RESOURCES",
            links: [
                { label: "Wholesale", href: "/wholesale" },
                { label: "Become a retailer", href: "/become-retailer" },
                { label: "Corporate orders", href: "/corporate-orders" },
                { label: "Store locator", href: "/store-locator" },
                { label: "Affiliates", href: "/affiliates" },
            ],
        },
        {
            title: "GET IN TOUCH",
            links: [
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Pinterest", href: "https://pinterest.com" },
                { label: "TikTok", href: "https://tiktok.com" },
                { label: "YouTube", href: "https://youtube.com" },
            ],
        },
        {
            title: "SUPPORT",
            links: [
                { label: "Contact us", href: "/contact" },
                { label: "Delivery", href: "/delivery" },
                { label: "Shipping & Returns", href: "/shipping-returns" },
                { label: "My account", href: "/my-account" },
            ],
        },
    ],
    newsletter: {
        text: "Sign up for our newsletter and receive 10% off your first order",
        placeholder: "Email",
    },
    languageOptions: [
        { label: "English", value: "en" },
        { label: "Türkçe", value: "tr" },
    ],
    currencyOptions: [
        { label: "USD $", value: "usd" },
        { label: "EUR €", value: "eur" },
    ],
    paymentMethods: [
        { src: "/footer/1.png", alt: "Visa" },
        { src: "/footer/2.png", alt: "Mastercard" },
        { src: "/footer/3.png", alt: "American Express" },
        { src: "/footer/4.png", alt: "PayPal" },
    ],
    copyright: `© ${new Date().getFullYear()} Ascension main. All rights reserved.`,
};