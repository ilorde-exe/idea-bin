import "@styles/globals.css";
import blueYellow from "@public/blueyellow.jpg";
import Image from "next/image";
import Nav from "@components/Nav";

export const metadata = {
  title: "IdeaBin",
  description: "Post and Find great Ideas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <div className="main">
          <Nav />
          <div className="background">
            <Image
              src={blueYellow}
              alt="Blue and Yellow Background"
              placeholder="blur"
              quality={100}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
                zIndex: -1,
              }}
            />
            <main className="app">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
