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
      <body
        className={`${jetBrainsMono.className} antialiased`}
      >
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Remove atributos dinâmicos adicionados por extensões como Dark Reader
              document.querySelectorAll('[data-darkreader-mode]').forEach(el => {
                el.removeAttribute('data-darkreader-mode');
                el.removeAttribute('data-darkreader-scheme');
                el.removeAttribute('data-darkreader-proxy-injected');
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
