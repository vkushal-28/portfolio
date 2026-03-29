import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "github" ? "/portfolio/" : "/",
  assetsInclude: "**/*.docx",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            "react",
            "react-dom",
            "framer-motion",
            "clsx",
            "react-icons",
            "react-animated-cursor",
            "react-countup",
            "react-hot-toast",
            "react-parallax-tilt",
            "typewriter-effect",
          ],
        },
      },
    },
    // Ensure CSS is extracted to separate file for better caching
    cssCodeSplit: true,
  },
}));
