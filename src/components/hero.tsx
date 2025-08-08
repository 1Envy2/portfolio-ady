import { FlipWords } from "./ui/flip-words";
const Hero = () => {
  return (
    <div >
      <h1 className="text-white flex flex-col justify-center items-center w-full text-5xl mb-4 font-bold">
        Hi, Im Ady
      </h1>

      <p className="flex flex-col justify-center items-center">
        <FlipWords
          words={[
            "Fullstack Developer",
            "Frontend Developer",
            "Backend Developer",
          ]}
          duration={2000}
          className="text-white text-5xl mb-4"
        />
      </p>

      <p className="text-lg text-white flex flex-col justify-center items-center">
        Saya adalah mahasiswa dari universitas lampung.
      </p>
    </div>
  );
};

export default Hero;
