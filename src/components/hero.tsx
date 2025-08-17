import { FlipWords } from "./ui/flip-words";

const Hero = () => {
  return (
    <div>
      <h1 className="text-white flex flex-col justify-center items-center text-5xl font-bold mb-4">
        Hi, I&apos;m Ady
      </h1>

      <FlipWords
        words={[
          "Fullstack Developer",
          "Frontend Developer",
          "Backend Developer",
        ]}
        duration={2000}
        className="text-white text-5xl mb-4"
      />

      <p className="text-lg text-white flex flex-col justify-center items-center">
        Saya adalah mahasiswa dari universitas lampung.
      </p>
    </div>
  );
};

export default Hero;
