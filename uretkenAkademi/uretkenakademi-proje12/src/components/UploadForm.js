import React, { useState } from "react";
import { FormGroup, Label, Input, Alert } from "reactstrap";
import "./UploadForm.css";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image (png or jpeg) !");
    }
  };
  return (
    <div className="w-25 d-flex mx-auto justify-content-center">
      <FormGroup className="formGeneral">
        <Label for="exampleFile" className="formLabel">
          Upload File
        </Label>
        <Input
          className="formInput"
          onChange={changeHandler}
          name="file"
          type="file"
        />
        <div className="output">
          {error && (
            <Alert className="error" color="danger">
              {error}
            </Alert>
          )}
          {file && <div>{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </FormGroup>
    </div>
  );
};

export default UploadForm;
