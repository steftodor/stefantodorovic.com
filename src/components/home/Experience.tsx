import Image from "next/image";
import experiences from '../../../content/experience.json';



interface Experience {
  id: number;
  title: string;
  position: string;
  description: string;
  startDate: string;
  endDate?: string;
  logoUrl: string;
}
const typedExperiences: Experience[] = experiences as Experience[];



const Experience = () => {
  return (
    <div className="about-container">
      <div data-aos="fade-left">
        <h2>Experience</h2>
      </div>
      <div className="grid gap-4">
        {experiences.map((exp) => (
          <div key={exp.id} className="grid grid-cols-[auto,1fr] gap-4 items-start" data-aos="fade-right">
            <img src={exp.logoUrl} alt={`${exp.title} Logo`} className="w-12 h-12" />
            <div>
              <div>
                <span className="font-bold text-lg">{exp.title}</span>
                <span className="text-sm block">{exp.position}</span>
              </div>
              <p className=" mt-1">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience;