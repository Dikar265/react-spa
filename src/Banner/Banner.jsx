

export default function Banner({h1, p, button1, button2}){

    return(
        <section className=" bg-red-300 h-screen flex flex-col justify-center aling-middle p-40">
        <div className="flex justify-center">
          <h1 className="text-9xl text-center">{h1}</h1>
        </div>
        <div className="flex justify-center">
          <p className="text-3xl text-center m-8">
            {p}
          </p>
        </div>

        <div className="flex justify-center">
          <div className="flex justify-between p-8 space-x-6">
            <button className="bg-amber-800 rounded-2xl p-4">{button1}</button>
            <button className="bg-black text-white rounded-2xl p-4 space-x-2">
              {button2} <span aria-hidden="true">→</span>
            </button>

          </div>
        </div>
      </section>
    )
}