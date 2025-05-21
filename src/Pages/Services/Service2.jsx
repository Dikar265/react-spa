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
      <section className="grid grid-cols-3 gap-6">
        {employees.map((employee, index) => (
          <div className="flex flex-col items-center" key={index}>
            <img src={employee.image} className="h-auto w-96 object-contain" />
            <div className="w-96 ">
              <span className="text-sm text-gray-600">{employee.role}</span>
              <H3 text={employee.name}></H3>
              <div className="flex space-x-2 pt-2">
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
