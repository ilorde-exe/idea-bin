import "../styles/globals.css";
import Background from "@components/Background";
import Nav from "@components/Nav";

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
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
