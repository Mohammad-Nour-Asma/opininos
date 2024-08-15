import { baseUrl } from "@/constants/BaseUrl";
import PollInfo from "./Components/PollInfo";
import Error from "./error";
import styles from "./user.module.css";

async function layout({ children, params }) {
  let data;

  try {
    const res = await fetch(`${baseUrl}/poll/${params.id}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
    }

    data = await res.json();
  } catch (error) {
    console.error("Fetch error:", error);

    return (
      <div className="overflow-y-auto h-[100vh] flex justify-center items-center">
        <h2>لقد حدث خطأ</h2>
      </div>
    );
  }

  return (
    <section className="grid grid-cols-3 h-screen">
      <div className="col-span-full md:col-span-2 ">{children}</div>

      <div className={`col-span-1 text-right p-4  ${styles.userImage} `}>
        <div className="hidden flex-col h-full justify-end md:flex">
          <PollInfo data={data} />
        </div>
      </div>
    </section>
  );
}

export default layout;
