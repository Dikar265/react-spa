import { AboutSection2 } from "@/Components/AboutSecction";
import { textProps } from "@/Props/TextAbout";
import imgseccion2 from "../../assets/pexels-caio-56733.jpg";
import { employees } from "@/Props/employees";
import { H3 } from "../../Components/Headings";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import Timeline from "../../Components/TimeLine";
export default function Service2() {
  return (
    <>
      <AboutSection2 img={imgseccion2} texts={textProps} h1={"dadsad"} />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 md:px-8">
  {employees.map((employee, index) => (
    <div className="flex flex-col items-center text-center" key={index}>
      <img
        src={employee.image}
        alt={employee.name}
        className="w-full max-w-xs h-auto object-contain"
      />
      <div className="w-full max-w-xs mt-4">
        <span className="text-sm text-gray-600">{employee.role}</span>
        <H3 text={employee.name} />
        <div className="flex justify-center space-x-3 pt-2">
          <a
            href={employee.socials.x}
            className="transition duration-300 hover:text-aquamarine-400"
          >
            <IconBrandX />
          </a>
          <a
            href={employee.socials.linkedin}
            className="transition duration-300 hover:text-aquamarine-400"
          >
            <IconBrandLinkedin />
          </a>
          <a
            href={employee.socials.instagram}
            className="transition duration-300 hover:text-aquamarine-400"
          >
            <IconBrandInstagram />
          </a>
        </div>
      </div>
    </div>
  ))}
</section>


      <Timeline/>
    </>
  );
}
