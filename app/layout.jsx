import "./globals.css";

export const metadata = {
  title: "Miocasa — Скоро",
  description: "Сайт в процессе разработки",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}
