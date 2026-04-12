import CareerItem from "./CareerItem";
import { CareerDataProps } from "../../../types/CareerDataProps";

interface CareerSectionProps {
  title: string;
  data: CareerDataProps[];
}

const CareerSection: React.FC<CareerSectionProps> = ({ title, data }) => {
  return (
    <>
      <p className="pb-3 text-2xl font-semibold">{title}</p>
      {data.map((item, index) => (
        <CareerItem key={index} {...item} />
      ))}
    </>
  );
};

export default CareerSection;
