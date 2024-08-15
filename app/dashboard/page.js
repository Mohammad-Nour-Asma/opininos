import Header from "./Components/Header";
import { baseUrl } from "@/constants/BaseUrl";
import Table from "./Components/Table";
import PopupPollUsers from "./Components/PopupPollUsers";
import PollSection from "./Components/PollSection";

async function page() {
  return (
    <div>
      <Header />
      <PollSection />
    </div>
  );
}

export default page;
