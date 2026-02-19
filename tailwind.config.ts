import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            animation: {
                marquee: "marquee var(--duration) linear infinite",
                "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
                fadeInUp: "fadeInUp 0.6s ease-out forwards",
                borderFade: "borderFade 1s ease-out forwards",
            },
            keyframes: {
                marquee: {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(calc(-100% - var(--gap)))" },
                },
                "marquee-vertical": {
                    from: { transform: "translateY(0)" },
                    to: { transform: "translateY(calc(-100% - var(--gap)))" },
                },
                fadeInUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(30px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
                borderFade: {
                    '0%': {
                        borderColor: 'rgb(249 115 22)',
                        boxShadow: '0 0 30px rgba(249,115,22,0.3)'
                    },
                    '100%': {
                        borderColor: 'rgb(226 232 240)',
                        boxShadow: '0 0 0 rgba(249,115,22,0)'
                    },
                },
            },
        },
    },
    plugins: [],
}
export default config
