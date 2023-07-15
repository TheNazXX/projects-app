import {Navbar, Footer} from "@/components";

export const metadata = {
  title: "Projects app",
  description: "Projects app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <Navbar />
          <main>
            {children}
          </main>
        <Footer />
      </body>
    </html>
  )
}