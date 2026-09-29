import HouseHeader from "@/pages/home/components/HouseHeader";
import Masthead from "@/pages/home/components/Masthead";
import CaptureBar from "@/pages/home/components/CaptureBar";
import BoardPanel from "@/pages/home/components/BoardPanel";
import EnginePanel from "@/pages/home/components/EnginePanel";
import ResearchInput from "@/pages/home/components/ResearchInput";
import InsightPanel from "@/pages/home/components/InsightPanel";
import ArchivePanel from "@/pages/home/components/ArchivePanel";
import ResearchPanel from "@/pages/home/components/ResearchPanel";
import HouseFooter from "@/pages/home/components/HouseFooter";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background-50 overflow-x-hidden">
      <HouseHeader />

      <main className="w-full px-6 lg:px-10 pb-10">
        <Masthead />

        <CaptureBar />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 border-t border-background-300/50 pt-10 lg:pt-0">
          <div className="lg:col-span-5 lg:border-r lg:border-background-300/50 lg:py-10 lg:pr-10">
            <BoardPanel />
          </div>
          <div className="lg:col-span-7 lg:py-10 lg:pl-10 flex flex-col">
            <EnginePanel />
          </div>
        </div>

        <ResearchInput />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 border-t border-background-300/50 pt-10 lg:pt-0">
          <div className="lg:col-span-6 lg:border-r lg:border-background-300/50 lg:py-10 lg:pr-10">
            <InsightPanel />
          </div>
          <div className="lg:col-span-6 lg:py-10 lg:pl-10 flex flex-col">
            <ArchivePanel />
          </div>
        </div>

        <ResearchPanel />
      </main>

      <HouseFooter />
    </div>
  );
}