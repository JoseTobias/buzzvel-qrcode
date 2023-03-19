import React from "react";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
