import localFont from "next/font/local";

const Futura = localFont({
  src: [
    {
      path: "../public/fonts/Futura-Book.woff",
      weight: "400",
    },
    {
      path: "../public/fonts/Futura-Medium.woff",
      weight: "600",
    },
    {
      path: "../public/fonts/Futura-Bold.woff",
      weight: "700",
    },
  ],
  variable: "--font-futura",
});

export default Futura;
