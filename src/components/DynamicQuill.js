import React, { useEffect } from "react";

import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

const DynamicQuill = ({ onChange = (f) => f, setNormalText = (f) => f }) => {
  const theme = "snow";

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ size: ["small", false, "large", "huge"] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["link"],
      [{ color: [] }, { background: [] }],
    ],
  };

  const { quill, quillRef } = useQuill({
    theme,
    modules,
  });

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        console.log(quillRef);
        // whenever there is a text change this useEffect will be fired
        setNormalText(quillRef.current?.innerText); // quillRef.current?.innerText will return normal text
        onChange(quillRef.current?.innerHTML); // quillRef.current?.innerHTML will return html which will include quill classes and tags
      });
    }
  }, [quill, onChange, quillRef, setNormalText]);

  return (
    <>
      <div style={{ width: "100%", marginTop: "4rem" }}>
        <div ref={quillRef} />
      </div>
    </>
  );
};

export default DynamicQuill;
