import { HiOutlineNewspaper } from "react-icons/hi2";
import { TbMessageQuestion } from "react-icons/tb";
import { FcAcceptDatabase } from "react-icons/fc";
import Step from "./Step";
import { BASIC_STEP, PASSED_STEP, QUESSTIONS_STEP } from "@/constants/Steps";
const FormHeader = () => {
  return (
    <div
      className={`flex p-4 md:justify-center  justify-between md:gap-[140px] gap-[0] flex-row-reverse `}
    >
      {buttons.map((item) => {
        return <Step key={item.id} info={item} />;
      })}
    </div>
  );
};

export default FormHeader;

const buttons = [
  {
    id: 1,
    name: "المعلومات الخاصة",
    icon: <HiOutlineNewspaper className="text-4xl" />,
    step: BASIC_STEP,
  },
  {
    id: 2,
    name: "الاسئلة",
    icon: <TbMessageQuestion className="text-4xl" />,
    step: QUESSTIONS_STEP,
  },
  {
    id: 3,
    name: "الموافقة",
    icon: <FcAcceptDatabase className="text-4xl" />,
    step: PASSED_STEP,
  },
];
