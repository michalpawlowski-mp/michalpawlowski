import { formatDate } from "../../../Utils/formatDate";
import { CareerDataProps } from "../../../types/CareerDataProps";

const CareerItem = ({
  startDate,
  endDate,
  company,
  position,
  description,
}: CareerDataProps) => {
  return (
    <div className="p-4 mb-3 bg-[#252836] border border-white/8 rounded-xl">
      <p className="text-xs text-slate-500 mb-1">{formatDate(startDate, endDate)}</p>
      <p className="text-white font-medium text-sm">{company}</p>
      <p className="text-xs text-slate-400 mb-2">{position}</p>
      <ul>
        {description.map((item, index) => (
          <li key={index} className="text-sm text-slate-400 leading-relaxed">
            - {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CareerItem;
