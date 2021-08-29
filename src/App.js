import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Button } from "react-bootstrap";
import DynamicQuill from "./components/DynamicQuill";

function App() {
  const [quillText, setQuillText] = useState(undefined);
  const [showPreview, setShowPreview] = useState(false);

  let editable_elements = document.querySelectorAll("[contenteditable=true]");
  if (editable_elements) {
    for (let i = 0; i < editable_elements.length; i++)
      editable_elements[i].setAttribute("contenteditable", false);
  }

  return (
    <>
      <div className="flex justify-center align-center container mt-5 w-50">
        <h1>Let's Build RTE for React application!</h1>

        <DynamicQuill
          onChange={(value) => {
            setShowPreview(false);
            setQuillText(value);
          }}
        />
        <Button className="mt-4" onClick={() => setShowPreview(true)}>
          Preview
        </Button>

        {quillText && showPreview && (
          <>
            <h5 className="mt-4">Preview:</h5>
            <div
              className="mb-5"
              style={{ border: "1px solid gray", height: "auto" }}
            >
              <div dangerouslySetInnerHTML={{ __html: quillText }} />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
