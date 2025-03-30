import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from "@headlessui/react";
  import { faqs } from "../../Props/Faq"; // Asegúrate de importar la lista de FAQs
  
  export default function FAQSection() {
    return (
      <div className="w-[50%] pt-6">
        <h2 className="text-center text-2xl font-bold mb-4">
          Our Faq
        </h2>
        <div className="mx-auto w-full max-w-lg divide-y rounded-xl ">
          {faqs.map((faq, index) => (
            <Disclosure as="div" key={index} className="p-6">
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm/6 font-medium">
                  {faq.question}
                </span>
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-sm/5">
                {faq.answer}
              </DisclosurePanel>
            </Disclosure>
          ))}
        </div>
      </div>
    );
  }
  