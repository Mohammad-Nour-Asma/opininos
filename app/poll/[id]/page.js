import { baseUrl } from "@/constants/BaseUrl";
import Form from "./Components/Form";
import Error from "./error";

async function page({ params }) {
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
    <div className="overflow-y-auto h-[100vh]">
      <Form data={data} />
    </div>
  );
}

export default page;
