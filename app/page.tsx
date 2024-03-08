import { TopStrip } from "@/components/TopStrip/TopStrip";
import "../commonStyles/utilities.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Hero } from "@/components/Hero/Hero";
import { ShoppingPage } from "@/components/ShoppingPage/ShoppingPage";
import { Products } from "@/components/Products/Products";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <TopStrip />
      <Navbar />
      <Hero />
      <ShoppingPage>
        <Products />
      </ShoppingPage>
      <Footer />
    </main>
  );
}
