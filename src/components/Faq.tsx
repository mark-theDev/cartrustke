import { CiCirclePlus } from "react-icons/ci";
import { FaCircleMinus } from "react-icons/fa6";

type AccordionProps = {
    question: string,
    answer: string,
    isOpen: boolean,
    toggleOpen: () => void
}

const Faq: React.FC<AccordionProps> = ({ question, answer, isOpen, toggleOpen }) => {

    return (
        <div className='w-full flex justify-start flex-col py-2 border-b'>
            <button
                className='flex justify-between items-center w-full'
                onClick={toggleOpen}
                aria-expanded={isOpen}
                aria-controls={`answer-${question}`}
            >
                <span className='text-lg md:text-xl text-left font-bold'>{question}</span>
                <span className='text-2xl ml-3'>{isOpen ? <FaCircleMinus /> : <CiCirclePlus />}</span>
            </button>
            <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out text-sm 
            ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className='overflow-hidden mt-2 text-base font-light'>{answer}</div>
            </div>
        </div>
    )
}

export default Faq