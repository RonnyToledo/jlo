import "./globals.css";

export const metadata = {
  title: "Jlo's Cosmetic",
  description:
    "El Skincare es el cuidado que le damos a nuestra piel para mantenerla saludable y el maquillaje es la práctica de decorar la piel y otras partes visibles del cuerpo para resaltarlas o mejorar su aspecto, apelando a productos cosméticos. Recuerda que un buen Skincare a los 20 sera una buena piel a los 40",
  openGraph: {
    image: [{ url: "/img.jpg" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ scrollBehavior: "smooth" }}>{children}</body>
    </html>
  );
}
