import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "../Props/Faq";

export default function FAQSection() {
  return (
    <div className="w-[50%] pt-6">
      <h2 className="text-center text-2xl font-bold mb-4">Our Faq</h2>
      <div className="mx-auto w-full max-w-lg divide-y rounded-xl">
        {faqs.map((faq, index) => (
          <Disclosure as="div" key={index} className="p-6">
            {({ open }) => (
              <>
                <DisclosureButton className="w-full">
                  <motion.div whileTap={{ y: 1 }}>
                    <div className="flex justify-between w-full">
                    <div>
                    {faq.question}
                    </div>
                    <div>
                     {open ? "▲" : "▼"}
                     </div>
                     </div>
                  </motion.div>
                </DisclosureButton>
                <AnimatePresence initial={false}>
                  {open && (
                    <DisclosurePanel static>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="mt-2 text-sm/5"
                      >
                        {faq.answer}
                      </motion.div>
                    </DisclosurePanel>
                  )}
                </AnimatePresence>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
