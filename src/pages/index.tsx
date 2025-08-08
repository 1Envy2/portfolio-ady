import Navigation from "@/components/navbar";
import Hero from "@/components/hero";
export default function Home() {
  return (
    <div className="w-screen h-screen justify-center items-center bg-radial-[at_50%_25%] from-blue-900  to-slate-950 to-90%">
      <Navigation></Navigation>
      <main className=" flex flex-col gap-40 mt-20">
        <div className="justify-center items-center ">
          <Hero></Hero>
        </div>
        <div className="flex flex-row px-5">
          <h2 className="text-white text-lg flex flex-start font-bold mx-auto ">
            About Me
          </h2>
        </div>
      </main>
    </div>
  );
}
