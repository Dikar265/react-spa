import CountUp from "react-countup";
export default function NumberGrid({props}) {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 md:divide-x-1">
      {props.map((prop, index) => (
        <div key={index} className="flex justify-center text-center pb-5 pt-5 border-b-1 md:border-b-0 m-4 ">
          <div className="flex flex-col text-center space-y-6">
            <div className="flex justify-center text-xs md:text-2xl">
            {prop.icon}
            </div>
            <div>
              <CountUp
                start={prop.start}
                end={prop.end}
                duration={prop.duration}
                className="text-2xl md:text-6xl"
              />
            </div>
            <h3 className=" text-xl md:text-3xl">{prop.tittle}</h3>
          </div>
        </div>
      ))}
    </section>
  );
}
