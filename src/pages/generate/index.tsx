import React from "react";
import QRCode from "qrcode.react";

import "./styles.css";

import Button from "../../components/Button";
import Input from "../../components/Input";

function GeneratePage() {
  return (
    <div className="page">
      <h1>QR Code Image Generator</h1>
      <div className="mb-4">
        <Input label="Name" id="name" />
      </div>
      <div className="mb-4">
        <Input label="LinkedIn URL" id="linkedin" />
      </div>
      <div className="mb-4">
        <Input label="Github URL" id="github" />
      </div>
      <Button />
      <div className="qrcode-content">
        <QRCode value="https://reactjs.org/" renderAs="canvas" />
      </div>
    </div>
  );
}

export default GeneratePage;
