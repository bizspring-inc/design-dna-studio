import type { Config } from "tailwindcss";

/**
 * Growth Platform — Tailwind Config
 *
 * 모든 색상은 hsl(var(--token)) 형태로 매핑.
 * 새로운 토큰이 필요하면 src/index.css 에 변수 정의 후 여기에 alias만 추가.
 */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    screens: {
      sm: "992px",
      md: "1170px",
      lg: "1528px",
      xl: "1920px",
    },
    extend: {
      // ─── Typography ────────────────────────────────────────────────
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
        sans:       ["Pretendard", "sans-serif"],
      },
      fontSize: {
        // 1rem = 16px 기준
        h1:           ["2.25rem",   { lineHeight: "125%", letterSpacing: "-0.02em" }], // 36px
        h2:           ["1.5rem",    { lineHeight: "130%", letterSpacing: "-0.02em" }], // 24px
        h3:           ["1.3125rem", { lineHeight: "130%", letterSpacing: "-0.02em" }], // 21px
        h4:           ["1.125rem",  { lineHeight: "145%", letterSpacing: "-0.02em" }], // 18px
        h5:           ["1rem",      { lineHeight: "160%", letterSpacing: "-0.02em" }], // 16px
        "body-xs":    ["0.75rem",   { lineHeight: "145%", letterSpacing: "-0.02em" }], // 12px
        "body-sm":    ["0.8125rem", { lineHeight: "145%", letterSpacing: "-0.02em" }], // 13px
        "body-md":    ["0.875rem",  { lineHeight: "160%", letterSpacing: "-0.02em" }], // 14px
        "body-lg":    ["0.9375rem", { lineHeight: "160%", letterSpacing: "-0.02em" }], // 15px
        "body-xl":    ["1.125rem",  { lineHeight: "170%", letterSpacing: "-0.02em" }], // 18px
        caption:      ["0.75rem",   { lineHeight: "125%", letterSpacing: "-0.02em" }], // 12px
        label:        ["0.75rem",   { lineHeight: "125%", letterSpacing: "-0.02em" }], // 12px
        tag:          ["0.75rem",   { lineHeight: "125%", letterSpacing: "-0.02em" }], // 12px
      },
      fontWeight: {
        light: "300", normal: "400", medium: "500", semibold: "600", bold: "700",
      },
      letterSpacing: { default: "-0.02em" },

      // ─── Spacing ───────────────────────────────────────────────────
      spacing: {
        "2xs": "2px", xs: "4px", sm: "8px", md: "16px",
        lg: "24px", xl: "32px", "2xl": "48px", "3xl": "64px",
        "ph-6": "6px", "ph-8": "8px", "ph-12": "12px", "ph-16": "16px",
        "pv-1": "1px", "pv-2": "2px", "pv-3": "3px",
        "pv-4": "4px", "pv-6": "6px", "pv-8": "8px",
      },

      // ─── Sizing ────────────────────────────────────────────────────
      width: {
        "col-xs": "120px", "col-sm": "240px", "col-md": "480px",
        "col-lg": "560px", "col-xl": "720px",
        "modal-sm": "630px", "modal-md": "960px", "modal-lg": "1170px",
      },
      maxWidth: {
        container: "1528px", "container-xl": "1920px",
        "modal-sm": "630px", "modal-md": "960px", "modal-lg": "1170px",
      },
      minWidth: { container: "992px" },
      height: {
        "icon-sm": "17px", "icon-md": "20px", "icon-lg": "24px",
        "field-sm": "34px", "field-md": "40px",
      },
      size: {
        "icon-sm": "17px", "icon-md": "20px", "icon-lg": "24px",
        "material-xs": "17px", "material-sm": "20px", "material-md": "24px",
        "material-lg": "32px", "material-xl": "40px",
        "material-2xl": "56px", "material-3xl": "80px",
      },

      // ─── Radius ────────────────────────────────────────────────────
      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "label-round": "16px",
        "img-circle": "50%",
      },
      borderWidth: {
        DEFAULT: "1px",
        bold: "2px",
        quote: "4px",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
      },
      opacity: {
        "8": "0.08", "10": "0.1", "20": "0.2",
        "30": "0.3", "50": "0.5", "70": "0.7",
      },

      // ─── Colors ────────────────────────────────────────────────────
      colors: {
        // shadcn semantic
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },

        // Brand semantic
        primary: {
          DEFAULT: "hsl(var(--primary))",
          hover: "hsl(var(--primary-hover))",
          active: "hsl(var(--primary-active))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          hover: "hsl(var(--secondary-hover))",
          active: "hsl(var(--secondary-active))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          hover: "hsl(var(--tertiary-hover))",
          active: "hsl(var(--tertiary-active))",
        },

        // Palette (Grayscale)
        grayscale: {
          50:  "hsl(var(--gray-50))",
          100: "hsl(var(--gray-100))",
          150: "hsl(var(--gray-150))",
          200: "hsl(var(--gray-200))",
          300: "hsl(var(--gray-300))",
          400: "hsl(var(--gray-400))",
          500: "hsl(var(--gray-500))",
          600: "hsl(var(--gray-600))",
          700: "hsl(var(--gray-700))",
          800: "hsl(var(--gray-800))",
          900: "hsl(var(--gray-900))",
        },

        // Palette (Color scales)
        sky: {
          DEFAULT: "hsl(var(--sky))",
          hover: "hsl(var(--sky-hover))",
          active: "hsl(var(--sky-active))",
          "light-xl": "hsl(var(--sky-light-xl))",
          light: "hsl(var(--sky-light))",
          "light-hover": "hsl(var(--sky-light-hover))",
          "light-active": "hsl(var(--sky-light-active))",
          dark: "hsl(var(--sky-dark))",
          "dark-hover": "hsl(var(--sky-dark-hover))",
          "dark-active": "hsl(var(--sky-dark-active))",
          darker: "hsl(var(--sky-darker))",
        },
        teal: {
          DEFAULT: "hsl(var(--teal))",
          hover: "hsl(var(--teal-hover))",
          active: "hsl(var(--teal-active))",
          light: "hsl(var(--teal-light))",
          "light-hover": "hsl(var(--teal-light-hover))",
          "light-active": "hsl(var(--teal-light-active))",
          dark: "hsl(var(--teal-dark))",
          "dark-hover": "hsl(var(--teal-dark-hover))",
          "dark-active": "hsl(var(--teal-dark-active))",
          darker: "hsl(var(--teal-darker))",
        },
        purple: {
          DEFAULT: "hsl(var(--purple))",
          hover: "hsl(var(--purple-hover))",
          active: "hsl(var(--purple-active))",
          light: "hsl(var(--purple-light))",
          "light-hover": "hsl(var(--purple-light-hover))",
          "light-active": "hsl(var(--purple-light-active))",
          dark: "hsl(var(--purple-dark))",
          "dark-hover": "hsl(var(--purple-dark-hover))",
          "dark-active": "hsl(var(--purple-dark-active))",
          darker: "hsl(var(--purple-darker))",
        },
        blue: {
          DEFAULT: "hsl(var(--blue))",
          hover: "hsl(var(--blue-hover))",
          active: "hsl(var(--blue-active))",
          light: "hsl(var(--blue-light))",
          "light-hover": "hsl(var(--blue-light-hover))",
          "light-active": "hsl(var(--blue-light-active))",
          dark: "hsl(var(--blue-dark))",
        },
        yellow: {
          DEFAULT: "hsl(var(--yellow))",
          hover: "hsl(var(--yellow-hover))",
          active: "hsl(var(--yellow-active))",
          light: "hsl(var(--yellow-light))",
          "light-hover": "hsl(var(--yellow-light-hover))",
          "light-active": "hsl(var(--yellow-light-active))",
          dark: "hsl(var(--yellow-dark))",
        },
        red: {
          DEFAULT: "hsl(var(--red))",
          hover: "hsl(var(--red-hover))",
          active: "hsl(var(--red-active))",
          light: "hsl(var(--red-light))",
          "light-hover": "hsl(var(--red-light-hover))",
          "light-active": "hsl(var(--red-light-active))",
          dark: "hsl(var(--red-dark))",
        },

        // Semantic Font
        font: {
          DEFAULT:      "hsl(var(--font-default))",
          white:        "hsl(var(--font-white))",
          "mute-dark":  "hsl(var(--font-mute-dark))",
          "mute-light": "hsl(var(--font-mute-light))",
          link:         "hsl(var(--font-link))",
          "link-hover": "hsl(var(--font-link-hover))",
        },

        // Semantic Border (in addition to `border` shadcn token, expose nested)
        "border-extra-light": "hsl(var(--border-extra-light))",
        "border-light":       "hsl(var(--border-light))",
        "border-dark":        "hsl(var(--border-dark))",
        "border-black":       "hsl(var(--border-black))",

        // Semantic Surface
        surface: {
          purple:       "hsl(var(--surface-purple))",
          "purple-hover": "hsl(var(--surface-purple-hover))",
          teal:         "hsl(var(--surface-teal))",
          "teal-hover": "hsl(var(--surface-teal-hover))",
          blue:         "hsl(var(--surface-blue))",
          "blue-hover": "hsl(var(--surface-blue-hover))",
          yellow:       "hsl(var(--surface-yellow))",
          "yellow-hover": "hsl(var(--surface-yellow-hover))",
          red:          "hsl(var(--surface-red))",
          "red-hover":  "hsl(var(--surface-red-hover))",
          "sky-bg":     "hsl(var(--surface-sky-bg))",
          sky:          "hsl(var(--surface-sky))",
          "sky-hover":  "hsl(var(--surface-sky-hover))",
          white:        "hsl(var(--surface-white))",
          "white-hover": "hsl(var(--surface-white-hover))",
          "gray-light": "hsl(var(--surface-gray-light))",
          gray:         "hsl(var(--surface-gray))",
          "gray-hover": "hsl(var(--surface-gray-hover))",
          body:         "hsl(var(--surface-body))",
          black:        "hsl(var(--surface-black))",
          "black-hover": "hsl(var(--surface-black-hover))",
        },

        // Sidebar
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
