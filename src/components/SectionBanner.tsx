export default function SectionBanner() {
    return(
        <section className=" flex flex-row items-start justify-start  bg-[#463b66] mx-auto mt-4">
            <h1 className="text-2xl font-bold mb-4 text-white text-left container mx-auto">
                Welcome to the Westfields International School Library!
            </h1>
                <p className="text-lg text-white text-left container mx-auto">
                    Our library is a vibrant hub of learning, providing resources and services tailored to meet the diverse needs of our students, from preschool to senior high school.
                    We support various curricula, including CAIE and IB, ensuring that all students have access to the materials they need to succeed.
                </p>

            <img src="src\assets\Westfields-International-School.jpg" 
                alt="Logo" className=" h-20 mt-4 mb-2 absolute right-0" />
        </section>
    )
}