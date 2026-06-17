/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
    },
    keyframes: {
        kenburns: {
          '0%': {
            transform: 'scale(1) translate(0, 0)',
          },
          '100%': {
            transform: 'scale(1.2) translate(-2%, -2%)',
          },
        },
      },
      animation: {
        kenburns: 'kenburns 15s ease-out forwards',
      },
  },
  plugins: [],
};
