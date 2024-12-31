import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

export const metadata = {
  title: "Ticket Generator",
  description: "Description",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${jetBrainsMono.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
