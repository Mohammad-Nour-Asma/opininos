import { baseUrl } from "@/constants/BaseUrl";
import Progress from "./Progress";
export default function ({ data }) {
  return (
    <div>
      <h2 className="text-4xl text-white">{data?.data?.title}</h2>
      <p className="text-2xl text-customGray">{data?.data?.description}</p>
      <Progress />
    </div>
  );
}
