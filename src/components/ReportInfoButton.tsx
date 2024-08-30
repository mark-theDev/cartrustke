
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MdQuestionMark } from "react-icons/md";

export function QuerryButton() {
  return (
    <Dialog>
      <DialogTrigger className="bg-white hover:bg-white hover:text-black text-gray-600 rounded-full" asChild>
        <Button className="text-sm"><MdQuestionMark /></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="my-8 text-center">What is a Car Registration Number?</DialogTitle>
          <DialogDescription className="text-black">
            <p>A Car Registration Number is a unique set of 7 characters 
          assigned to each and every vehicle in Kenya eg KDA ***D.
          </p>
          <p className="mt-3">A Registration Number is the most reliable way to 
          identify the exact ownership of a car, commercial vehicle, bus, truck or even trailer.</p>
           
          </DialogDescription>
        </DialogHeader>        
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" className="bg-[#082854] text-xs text-white">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
