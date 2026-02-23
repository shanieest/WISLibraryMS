export default function SectionBanner() {
    return(
        <section className="mid-h-screen flex flex-col items-center justify-center bg-[#463b66] mx-auto mt-4">
            <h1 className="text-2xl font-bold mb-4 text-white text-left container mx-auto">
                Welcome to the Westfields International School Library! 
            </h1>
            <span className="text-lg text-white text-left container mx-auto">
                Our library is a vibrant hub of learning, providing resources and services tailored to meet the diverse needs of our students, from preschool to senior high school.
                We support various curricula, including CAIE and IB, ensuring that all students have access to the materials they need to succeed.
            </span>

            <img src="src\assets\Westfields-International-School.jpg" 
                alt="Logo" className=" h-20 mt-4 mb-2 absolute right-0" />
        </section>
    )
}