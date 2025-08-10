import { TextGenerateEffect } from "./ui/text-generate-effect";

const About = () => {
  const words = `Saya Adyatma Yusuf Farabi, mahasiswa jurusan Ilmu Komputer di
        Universitas Lampung dengan fokus pada pengembangan web. Sebagai seorang
        Fullstack Developer, saya mengembangkan frontend dan backend secara
        dinamis dan responsif. Di luar kegiatan kampus, saya bersemangat
        mendalami Web3 dan memiliki pengalaman kepemimpinan sebagai kepala
        bidang di organisasi, yang melengkapi keahlian teknis saya dengan
        kemampuan manajemen tim.
`;

  return (
    <div>
      <h1 className="text-white text-5xl font-bold">About me.</h1>
      {/* <TextGenerateEffect
        words={words}
        className="text-lg text-white text-justify"
      /> */}
      <p className="text-lg text-white text-justify">
        Saya Adyatma Yusuf Farabi, mahasiswa jurusan Ilmu Komputer di
        Universitas Lampung dengan fokus pada pengembangan web. Sebagai seorang
        Fullstack Developer, saya mengembangkan frontend dan backend secara
        dinamis dan responsif. Di luar kegiatan kampus, saya bersemangat
        mendalami Web3 dan memiliki pengalaman kepemimpinan sebagai kepala
        bidang di organisasi, yang melengkapi keahlian teknis saya dengan
        kemampuan manajemen tim.
      </p>
    </div>
  );
};

export default About;
