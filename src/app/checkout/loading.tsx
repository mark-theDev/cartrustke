'use client'
import LoadingSpinner from "@/components/Loading";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="loading-overlay">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{opacity: 0}}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <LoadingSpinner />
      </motion.div>
    </div>
  );
}