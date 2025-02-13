import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-image': "url('/new-banner-0d26d04d1868fdf350dab187959b49e4.webp')",
        'image2': "url('https://vintory.ca/_next/static/images/background-ffcb42bdddc4f8d4af9f961c0e2ac3bc.jpg')"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)", 
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.33%)' }
        }
      },
      animation: {
        'slide-left': 'slide-left 30s linear infinite',
      }
    },
  },
  plugins: [],
} satisfies Config;
