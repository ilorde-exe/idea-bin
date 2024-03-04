import "../styles/globals.css";
import Nav from "@components/Nav";
import Footer from "@components/Footer";

export const metadata = {
  title: "IdeaBin",
  description: "Post and Find great Ideas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" max-w-10xl">
        <div className="">
          <div className="">
            <main className="app">
              <Nav />
              {children}
              <Footer />
            </main>
          </div>
        </div>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
