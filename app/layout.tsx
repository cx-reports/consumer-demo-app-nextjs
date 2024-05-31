import { ModeToggle } from "@/components/ui/mode-toggle";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Logo } from "@/components/ui/logo";
import { DesktopMenu } from "@/components/modules/desktop-menu";
import { MobileMenu } from "@/components/modules/mobile-menu";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "CxReports Consumer Demo App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased grid w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <DesktopMenu />

          <div className="flex flex-col">
            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
              <Logo className="block md:hidden" />

              <div className="w-full flex flex-1 justify-end gap-2">
                <ModeToggle />
                <MobileMenu />
              </div>
            </header>

            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
