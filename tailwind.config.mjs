/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "#463636"
      },
      fontFamily: {
        logo: 'Old Standard TT, serif'
      },
      fontSize: {
        "2xs": "10px"
      },
      maxWidth: {
        "2xs": "16rem"
      }
    },
  },
  plugins: [],
};
