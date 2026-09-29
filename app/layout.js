import "./globals.css";

export const metadata = {
  title: "Johan Sarmiento | Software Developer",
  description: "Portafolio de Johan Sarmiento, desarrollador de software.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}