import "@styles/globals.css";
import Background from "@components/Background";
import Image from "next/image";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "IdeaBin",
  description: "Post and Find great Ideas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <div className="">
          <div className="">
            <Background />
            <main className="app">
              <Nav />
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
