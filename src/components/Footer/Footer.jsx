"use client";

import { useState } from "react";
import { FooterSection } from "./FooterSection";
import { footerData } from "./footerData";
import {
    Select,
    Image,
    Group,
    Text,
    Accordion,
} from "@mantine/core";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import Link from "next/link";

export const Footer = () => {
    const [language, setLanguage] = useState(footerData.languageOptions[0].value);
    const [currency, setCurrency] = useState(footerData.currencyOptions[0].value);
    const [email, setEmail] = useState("");

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        console.log("Newsletter signup with email:", email);
        setEmail("");
    };

    return (
        <footer className="bg-[#f9f9f9] py-12 px-6 md:px-12 w-full">
            {/* Main Footer Container */}
            <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row md:flex-wrap gap-10">

                {/* Footer Sections - Flex Wrap on Larger Screens */}
                <div className="w-full md:flex md:flex-wrap md:gap-8 md:w-4/6">
                    {/* Grid layout for larger screens */}
                    <div className="hidden md:flex md:flex-wrap justify-between md:gap-20 md:w-full">
                        {footerData.sections.map((section, index) => (
                            <FooterSection key={index} title={section.title} links={section.links} />
                        ))}
                    </div>

                    {/* Mobile View: Accordion */}
                    <div className="md:hidden w-full">
                        <Accordion>
                            {footerData.sections.map((section, index) => (
                                <Accordion.Item key={index} value={section.title}>
                                    <Accordion.Control className="text-sm text-gray-700 font-medium">
                                        {section.title}
                                    </Accordion.Control>
                                    <Accordion.Panel>
                                        <ul className="flex flex-col space-y-2 text-gray-600 text-sm">
                                            {section.links.map((link, idx) => (
                                                <li key={idx}>
                                                    <Link href={link.href} className="text-xs hover:text-gray-800 cursor-pointer">
                                                        {link.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </Accordion.Panel>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="w-full flex flex-col gap-4 md:w-[30%]">
                    <p className="text-gray-700 text-xl font-medium font-logo">
                        {footerData.newsletter.text}
                    </p>
                    <form
                        onSubmit={handleNewsletterSubmit}
                        className="flex items-center w-full border border-gray-300 px-4 py-2 bg-white"
                    >
                        <input
                            type="email"
                            placeholder={footerData.newsletter.placeholder}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-transparent focus:outline-none text-gray-700 text-sm"
                        />
                        <button
                            type="submit"
                            className="p-2 rounded-full bg-gray-300 hover:bg-gray-400"
                        >
                            <FiChevronRight size={18} className="text-gray-600" />
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Section - Flex Wrap */}
            <div className="max-w-screen-2xl mx-auto mt-12 flex flex-wrap md:flex-row md:items-center justify-between gap-4 border-t border-gray-300 pt-6">
                {/* Language & Currency Select */}
                <Group gap="xs" className="flex-wrap">
                    <div className="relative">
                        <Select
                            data={footerData.languageOptions}
                            value={language}
                            onChange={setLanguage}
                            size="xs"
                            radius="md"
                            rightSection={<FiChevronDown size={16} />}
                            className="w-28"
                            styles={{ input: { paddingRight: "1.5rem" } }}
                        />
                    </div>

                    <div className="relative">
                        <Select
                            data={footerData.currencyOptions}
                            value={currency}
                            onChange={setCurrency}
                            size="xs"
                            radius="md"
                            rightSection={<FiChevronDown size={16} />}
                            className="w-28"
                            styles={{ input: { paddingRight: "1.5rem" } }}
                        />
                    </div>
                </Group>

                {/* Payment Methods */}
                <Group gap="xs" className="flex-wrap justify-end">
                    {footerData.paymentMethods.map((method, index) => (
                        <Image
                            key={index}
                            src={method.src}
                            alt={method.alt}
                            width={40}
                            height={20}
                            fit="contain"
                            className="object-cover h-8 w-auto"
                        />
                    ))}
                </Group>
            </div>

            {/* Copyright */}
            <Text className="text-gray-500 text-xs text-center mt-6">
                {footerData.copyright}
            </Text>
        </footer>
    );
};

export default Footer;
