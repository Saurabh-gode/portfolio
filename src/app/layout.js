import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

import { cn } from "@/lib/utils";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Saurabh Gode - Developer",
  description:
    "Full-Stack developer, Tech enthusiast and a Learner. I like building products and web apps that impact millions of lives.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background antialiased max-w-2xl w-full m-auto flex-col font-ubuntu"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
