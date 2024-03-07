import { TopStrip } from "@/components/TopStrip/TopStrip";
import "../commonStyles/utilities.css";
import { Navbar } from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="w-full">
      {/* <TopStrip /> */}
      <Navbar />
    </main>
  );
}
