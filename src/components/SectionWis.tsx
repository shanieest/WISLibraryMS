import logo from "../assets/Westfields Badge.png";

export default function SectionWis() {
  return (
    <section className="bg-[#463b66] text-white px-10 py-6 mt-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        <div className="flex items-center gap-6">
          <img
            src={logo}
            alt="Westfields Logo"
            className="h-20 w-auto"
          />
          
          <h1 className="text-2xl font-bold leading-tight">
            Westfields <br />
            International School
          </h1>
        </div>

        <h2 className="text-4xl font-extrabold tracking-wide">
          LIBRARY
        </h2>

      </div>
    </section>
  );
}
