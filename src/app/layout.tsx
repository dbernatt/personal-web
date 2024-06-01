import lightTheme, { darkTheme } from "@/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bernat Domokos",
  description: "Personal website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
