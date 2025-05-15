import CountUp from "react-countup";
export default function NumberGrid({props}) {
  return (
    <section className="grid grid-cols-4 py-20 divide-x-1">
      {props.map((prop, index) => (
        <div key={index} className="flex justify-center text-center">
          <div className="flex flex-col text-center space-y-6">
            <div className="flex justify-center">
            {prop.icon}
            </div>
            <div>
              <CountUp
                start={prop.start}
                end={prop.end}
                duration={prop.duration}
                className="text-6xl"
              />
            </div>
            <h3 className="text-3xl">{prop.tittle}</h3>
          </div>
        </div>
      ))}
    </section>
  );
}
