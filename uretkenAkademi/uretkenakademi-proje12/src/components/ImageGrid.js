import React from "react";
import Firestore from "../hooks/Firestore";
import { motion } from "framer-motion";
import "./ImageGrid.css";
import { Card } from "reactstrap";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = Firestore("images");

  return (
    <div >
      {docs &&
        docs.map((doc) => (
          <Card
          xs="9"
            style={{
              width: "28rem",
              marginBottom: "30px",
              justifyContent: "center",
              display:"flex",
            }}
            className="mx-auto justify-content-center"
          >
            <motion.div
              className="img-wrap"
              key={doc.id}
              layout
              whileHover={{ opacity: 1 }}
              
            >
              <motion.img
                src={doc.url}
                alt="uploaded pic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          </Card>
        ))}
    </div>
  );
};

export default ImageGrid;
