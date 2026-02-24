import bannerImg from "../assets/Westfields-International-School.jpg";

export default function SectionBanner() {
  return (
    <section className="relative bg-[#463b66] text-white overflow-hidden mt-4">
      
      <div className="max-w-6xl mx-auto px-10 py-16 flex items-center">
        
        <div className="w-1/2 z-10">
          <h1 className="text-3xl font-bold mb-6 font-serif">
            Welcome to the Westfields International School Library!
          </h1>

          <p className="text-lg leading-relaxed text-gray-200 font-serif">
            Our library is a vibrant hub of learning, providing resources and
            services tailored to meet the diverse needs of our students, from
            preschool to senior high school. We support various curricula,
            including CAIE and IB, ensuring that all students have access to the
            materials they need to succeed.
          </p>
        </div>

      </div>

      <img
        src={bannerImg}
        alt="Westfields International School"
        className="absolute right-0 bottom-0 h-[130%] object-cover"
      />
    </section>
  );
}
