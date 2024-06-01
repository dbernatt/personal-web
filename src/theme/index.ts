"use client";
import { blue, green, purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const lightTheme = createTheme({
  palette: {
    primary: green,
  },

  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

const darkTheme = createTheme({
  palette: {
    primary: purple,
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export { darkTheme };
export default lightTheme;
