import React, { useState } from "react";
import QRCode from "qrcode.react";

import "./styles.css";

import Button from "../../components/Button";
import Input from "../../components/Input";
import { isURL } from "../../utils";

interface FormState {
  name: string;
  linkedin: string;
  github: string;
}

type FormKeys = keyof FormState;

function GeneratePage() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    github: "",
    linkedin: "",
  });
  const [url, setUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChangeFormData = (
    e: React.ChangeEvent<HTMLInputElement>,
    label: FormKeys
  ) => {
    const value = e.target.value;
    setFormData((prevState) => ({ ...prevState, [label]: value }));
  };

  const handleGenerateCode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isURL(formData.linkedin)) {
      setErrorMessage("invalid linkedin");
      return;
    }

    if (!isURL(formData.github)) {
      setErrorMessage("invalid github");
      return;
    }

    const makeUrl = `${process.env.REACT_APP_BASE_URL}/${formData.name}?linkedin=${formData.linkedin}&github=${formData.github}`;
    setErrorMessage("");
    setUrl(makeUrl);
  };

  return (
    <div className="page">
      <h1>QR Code Image Generator</h1>
      <form onSubmit={handleGenerateCode}>
        <div className="mb-4">
          <Input
            label="Name"
            id="name"
            onChange={(e) => handleChangeFormData(e, "name")}
            required
          />
        </div>
        <div className="mb-4">
          <Input
            label="LinkedIn URL"
            id="linkedin"
            onChange={(e) => handleChangeFormData(e, "linkedin")}
            required
          />
        </div>
        <div className="mb-4">
          <Input
            label="Github URL"
            id="github"
            onChange={(e) => handleChangeFormData(e, "github")}
            required
          />
        </div>
        <p className="error-message">{errorMessage}</p>
        <Button type="submit">Generate Image</Button>
        {url && (
          <div className="qrcode-content">
            <QRCode value={url} renderAs="canvas" />
          </div>
        )}
      </form>
    </div>
  );
}

export default GeneratePage;
