import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

export const metadata = {
  title: "Coding Conf 2025",
  description: "Your Journey to Coding Conf 2025 Starts Here! Secure your spot at next year's biggest coding conference.",
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
