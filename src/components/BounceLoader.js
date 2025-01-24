import React from "react";
import { BounceLoader } from "react-spinners";
import { motion, AnimatePresence } from "framer-motion";

const MyBounceLoader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex justify-center items-center bg-primary-200"
        >
          <BounceLoader color="#04A118" size={60} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MyBounceLoader;