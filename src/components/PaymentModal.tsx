"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter
} from "./ui/animated-modal";


export function PaymentModal() {
  
  return (
    <div className="h-screen bg-black/30 flex items-center justify-center">
      <Modal>        
        <ModalBody>
          <ModalContent>
            <h3>Your payment details have been submitted. <br /> You will received a payment prompt shortly</h3>
          </ModalContent>
          <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Contact us
            </button>
            <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
              Get report
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
