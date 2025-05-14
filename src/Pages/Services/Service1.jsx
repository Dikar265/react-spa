import { BandCards } from "../../Components/Cards";
import { Underline } from "../../Components/Underline";

export default function Service1() {
  return (
    <>
      <section>
        <div className="text-center text-8xl px-96 h-[60vh] content-center space-y-6">
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
          <p className="text-5xl">lorem imstup</p>
        </div>
        <div className="flex justify-center">
          <BandCards />
        </div>
      </section>
      <section className="bg-aquamarine-100 p-36">
        <div className="m-9 bg-white p-25 space-y-28 gap-5">
          <h2 className="text-center text-9xl">lorem impsu</h2>
          <div className="grid grid-cols-2 px-20 gap-10">
            <div className="text-left space-y-6">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
                impedit ipsum, veniam error necessitatibus eveniet numquam modi
                quaerat molestias aperiam, non earum architecto voluptatum
                pariatur voluptates. Nemo perspiciatis neque voluptas. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <p>
                 Dolorem
                nobis voluptate quis, culpa ex ipsa a hic? Excepturi laboriosam
                itaque sunt nostrum! Consequuntur esse optio nulla error, quod
                id cumque? Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Necessitatibus, eos iusto repellat, consequuntur possimus
                obcaecati distinctio animi sint quos, tempora magnam.
                Doloremque, nostrum? Optio deserunt adipisci vel recusandae,
                commodi sint.
              </p>
              <p>
                 Dolorem
                nobis voluptate quis, culpa ex ipsa a hic? Excepturi laboriosam
                itaque sunt nostrum! Consequuntur esse optio nulla error, quod
                id cumque? Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Necessitatibus, eos iusto repellat, consequuntur possimus
                obcaecati distinctio animi sint quos, tempora magnam.
                Doloremque, nostrum? Optio deserunt adipisci vel recusandae,
                commodi sint.
              </p>
              <p>
                 Dolorem
                nobis voluptate quis, culpa ex ipsa a hic? Excepturi laboriosam
                itaque sunt nostrum! Consequuntur esse optio nulla error, quod
                id cumque? Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Necessitatibus, eos iusto repellat, consequuntur possimus
                obcaecati distinctio animi sint quos, tempora magnam.
                Doloremque, nostrum? Optio deserunt adipisci vel recusandae,
                commodi sint.
              </p>
            </div>
            <div>
              
              <img src="/src/assets/pexels-christy-rice-1208544-2353413.jpg" className="w-auto h-full "/>
            </div>
          </div>
          <Underline color={'border-gray-400'} />

        </div>
      </section>
    </>
  );
}
