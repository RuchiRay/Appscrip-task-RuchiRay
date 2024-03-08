import { TopStrip } from "@/components/TopStrip/TopStrip";
import "../commonStyles/utilities.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Hero } from "@/components/Hero/Hero";
import { ShoppingPage } from "@/components/ShoppingPage/ShoppingPage";

export default function Home() {
  return (
    <main className="w-full">
      {/* <TopStrip /> */}
      <Navbar />
      <Hero />
      <ShoppingPage />
    </main>
  );
}
