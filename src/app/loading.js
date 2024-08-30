'use client'
import LoadingSpinner from "@/components/Loading";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div> 
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{opacity: 0}}
        transition={{ duration: 0.5, ease: 'linear' }}
      >
        <LoadingSpinner />
      </motion.div>
    </div>
  );
}
