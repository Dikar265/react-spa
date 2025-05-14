import ContactLinks from "../Components/ContactLinks";
import Input from "../Components/Input";
import TextTarea from "../Components/TextTarea";
import { H1 } from "../Components/Headings";

export default function Contact() {
  return (
    <>
    <div className="pt-24 gap-12">
      
    <H1 text={'Contact'}/>
      <section className="grid grid-cols-2 gap-10 max-w-screen mx-auto px-40 py-32">
        <div className="flex flex-col bg-aquamarine-200 p-9 rounded-xl">
          <h2 className="text-5xl pb-6">Lorem</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            architecto repellendus a at reprehenderit delectus maxime, officia,
            porro omnis voluptatibus tenetur placeat laboriosam aut iste debitis
            provident sapiente praesentium necessitatibus.
          </p>
          <div className="pl-12 py-12">
            <ContactLinks view={"Page"} />
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <form className="w-full max-w-2xl">
            <div className="grid grid-cols-2 gap-6">
              <Input type={"text"} name={"name"} placeholder={"Name"} />
              <Input
                type={"text"}
                name={"lastname"}
                placeholder={"Last Name"}
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Input type={"text"} name={"phone"} placeholder={"Phone"} />
              <Input type={"email"} name={"email"} placeholder={"Email"} />
            </div>
            <div className="mb-5">
              <TextTarea name={"Message"} rows={5} placeholder={"Message"} />
            </div>
            <button
              type="submit"
              className=" bg-aquamarine-200 hover:bg-aquamarine-300 transition text-black focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Register new account
            </button>
          </form>
        </div>
      </section>
      </div>
      <section>
        <h2 className="text-center text-5xl p-10">Map</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.182370726!2d-0.10159865000000001!3d51.52864165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2spe!4v1744155745922!5m2!1sen!2spe"
          className="w-full h-[80vh]"
        ></iframe>
      </section>
    </>
  );
}
