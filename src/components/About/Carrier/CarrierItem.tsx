import { formatDate } from "../../../Utils/formatDate";
import { CarrierDataProps } from "../../../types/CarrierDataProps";

const CarrierItem = ({
  startDate,
  endDate,
  company,
  position,
  description,
}: CarrierDataProps) => {
  return (
    <div className="p-4 mb-4 bg-black/20 rounded-3xl shadow shadow-white">
      <p className="text-xs">{formatDate(startDate, endDate)}</p>
      <p>{company}</p>
      <p className="text-xs">{position}</p>
      <ul className="p-0">
        {description.map((item, index) => (
          <li key={index} className="text-sm">
            - {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarrierItem;
