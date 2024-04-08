'use client'
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Content from "./components/content";
import Links from "./components/links/links";

export default function Home() {
  return (
    <main>
      {/* Header */}
      <Header />

      {/* Content and Links */}
      <div style={{ display: "flex" }} className="link-content">
        {/* Content (80%) */}
        <div style={{ flex: "1" }} className="container">
          {/* Your content goes here */}
          <Content />
        </div>

        {/* Links (20%) */}
        <div style={{ flex: "0 0 30%", maxWidth: "30%" }}>
          <Links />
        </div>
      </div>

      {/* Footer */}
      <Footer />

      <style jsx>{`
        @media only screen and (max-width: 768px) {
          .link-content > div:first-child {
            margin: 0 /* Adjust the margin as per your requirement */
          }
        }
      `}</style>
    </main>
  );
}
