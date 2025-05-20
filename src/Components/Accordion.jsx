import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Acordion = ({ props }) => {
  return (
    <Accordion type="horizontal" collapsible className="w-full max-w-2xl">
      {props.map((prop, index) => (
        <AccordionItem value={String(index)} key={index}>
          <AccordionTrigger>{prop.question}</AccordionTrigger>
          <AccordionContent className="AccordionContent">{prop.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
