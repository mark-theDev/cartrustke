import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface AccordionProps{
    title: string;
    description: string;
    value: string
}
  
const FaqAccordion: React.FC<AccordionProps> = ({title,description, value}) => {
  return (
    <Accordion type="single" collapsible className="w-full md:w-[50vw] mx-auto">
      <AccordionItem value={value}>
        <AccordionTrigger className="text-lg font-bold">{title}</AccordionTrigger>
        <AccordionContent className="text-base font-normal">
          {description}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default FaqAccordion