import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Image } from "@heroui/react";
interface Props {
  image: string;
}
const ContainerCard = ({image}: Props) => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <CardContainer className="">
        <CardBody className="bg-[#17202e] relative border-[#4FD1C5] w-auto h-auto rounded-xl p-6 border-1">
          <CardItem
            translateZ="50" // Efek 3D
            className="text-xl font-bold text-[#E2E8F0] dark:text-white"
          >
            Halo, saya Ady
          </CardItem>

          <CardItem
            as="p"
            translateZ="60" // Efek 3D
            className="text-[#E2E8F0] text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Seorang Fullstack Developer
          </CardItem>

          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={image}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>

          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20} // Efek 3D
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal text-[#E2E8F0] dark:text-white"
            >
              Coba klik →
            </CardItem>

            <CardItem
              translateZ={20} // Efek 3D
              as="button"
              className="px-4 py-2 rounded-xl bg-[#F96846] dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Hubungi saya
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default ContainerCard;
