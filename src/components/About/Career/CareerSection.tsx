import CareerItem from "./CareerItem";
import { CareerDataProps } from "../../../types/CareerDataProps";

interface CareerSectionProps {
  title: string;
  data: CareerDataProps[];
}

const CareerSection: React.FC<CareerSectionProps> = ({ title, data }) => {
  return (
    <div className="mb-4">
      <p className="text-base font-medium text-white mb-3 pb-2 border-b border-white/8">
        {title}
      </p>
      {data.map((item, index) => (
        <CareerItem key={index} {...item} />
      ))}
    </div>
  );
};

export default CareerSection;
