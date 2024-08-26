"use client"
import Presentation from "../components/Presentation";
import InfoGrid from "../components/InfoGrid";
import Roadmap from "../components/Roadmap";
import Team from "@/components/Team";
import Link from "next/link";
import { useLoginStore } from "@/store/useLoginStore";

export default function Home() {
  const { isLogged } = useLoginStore()

  return (
    <>
      <main className="flex flex-col items-center justify-between p-4 sm:pl-20 sm:pr-20 bg-black min-h-screen">
        <Presentation />

        <InfoGrid />

        {!isLogged &&
          <section className="text-center py-16 bg-black w-full">
            <h2 className="text-3xl font-bold text-white mb-8">Join FlexFi Today</h2>
            <p className="text-xl text-gray-300 mb-8">
              Sign up now and take control of your finances with FlexFi.
            </p>
            <Link href="/register" className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700">
              Sign Up Now
            </Link>
          </section>}

        <div id="roadmap-section">
          <Roadmap />
        </div>

        <div id="team-section">
          <Team />
        </div>
      </main>
    </>
  );
}
