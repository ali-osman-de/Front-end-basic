import React, { useEffect } from "react";
import Storage from "../hooks/Storage";
import "./Loading.css";
import { motion } from "framer-motion";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = Storage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%"}}
    >
      {progress+"%"}
    </motion.div>
  );
};

export default ProgressBar;
