import LoginForm from "./components/LoginForm";
import "../globals.css";

export default function Home() {
  return (
    <section className="grid grid-cols-3 h-screen">
      {/* Form Section */}
      <LoginForm />

      <div className={`col-span-1 hidden md:block  computerImage `}></div>
    </section>
  );
}
