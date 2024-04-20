import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Censo Web",
  description: "Sitio para censar a damnificados del huracán Otis en Acapulco",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossorigin="anonymous"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
