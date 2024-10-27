import { join } from "path";
import forms from "@tailwindcss/forms";
import type { Config } from "tailwindcss";
import { skeleton } from "@skeletonlabs/tw-plugin";
import { tutors } from "./src/lib/ui/themes/styles/tutors";
import typography from "@tailwindcss/typography";

const config = {
  mode: "jit",
  content: ["./src/**/*.{html,js,svelte,ts}", "./src/**/**/*.{html,js,svelte,ts}", join(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,js,svelte,ts}")],
  safelist: [
    {
      pattern: /border|text/
    }
  ],
  plugins: [
    forms,
    typography,
    skeleton({
      themes: {
        custom: [tutors],
        preset: [
          { name: "skeleton", enhancements: true },
          { name: "seafoam", enhancements: true },
          { name: "vintage", enhancements: true }
        ]
      }
    })
  ],
  darkMode: "class"
} satisfies Config;

export default config;
