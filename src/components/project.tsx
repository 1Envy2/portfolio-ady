import ContainerCard from "./fragment/cardContainer";
const Project = () => {
  return (
    <div className="py-4 flex flex-row items-center justify-center gap-4">
      <ContainerCard image="/images/card-project/card.jpg"></ContainerCard>
      <ContainerCard image="/images/card-project/card.jpg"></ContainerCard>
      <ContainerCard image="/images/card-project/card.jpg"></ContainerCard>
      <ContainerCard image="/images/card-project/card.jpg"></ContainerCard>
    </div>
  );
};

export default Project;
