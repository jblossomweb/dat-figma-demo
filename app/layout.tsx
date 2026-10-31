import type { Metadata } from "next";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "DAT Code Challenge",
  description: "New Broker Page Experience",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <div id="app" className="min-h-full flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
