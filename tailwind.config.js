/** @type {import("tailwindcss").Config} */
export default {
  "content": [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  "theme": {
    "extend": {
      "colors": {
        "brand": {
          "black": "#020202",
          "white": "#F5F5F5",
          "red": "#FF0000",
          "gray": "#111111"
        }
      },
      "fontFamily": {
        "sans": [
          "Inter",
          "sans-serif"
        ],
        "display": [
          "Space Grotesk",
          "sans-serif"
        ],
        "mono": [
          "JetBrains Mono",
          "monospace"
        ]
      },
      "letterSpacing": {
        "brutal": "-0.08em",
        "technical": "0.5em"
      },
      "animation": {
        "glitch": "glitch 0.3s cubic-bezier(.25,.46,.45,.94) both infinite",
        "glitch-subtle": "glitch-subtle 4.5s ease-in-out infinite",
        "glitch-burst": "glitch-burst 0.35s ease-out forwards",
        "ticker": "ticker 30s linear infinite"
      }
    }
  }
};
