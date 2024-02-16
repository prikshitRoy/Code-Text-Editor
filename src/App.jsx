import { useState, useRef } from "react";
import "./App.css";
import Editor from "@monaco-editor/react";

const files = {
  "script.py": {
    name: "script.py",
    language: "python",
    value: "Hello world from python",
  },
  "index.html": {
    name: "index.html",
    language: "html",
    value: "<div> </div>",
  },
};

function App() {
  const [fileName, setFileName] = useState("script.py");
  const editorRef = useRef(null);
  const file = files[fileName];
  //files["script.py"] -> file -> name, language, value -> pass those to the editor

  //! Note:
  // it will take up the full width /  height of its container  (width: 100%, hight: 100%)
  // editor of any size
  // full screen, embed type size

  //! Task 1:
  // 1. Be able to change from 1 file to next
  // 2. Get the value of the Monaco editor

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }
  function getEditorValue() {
    alert(editorRef.current.getValue());
  }

  return (
    <div className="App">
      <button
        onClick={() => {
          setFileName("index.html");
        }}
      >
        Switch to index.html
      </button>
      <button
        onClick={() => {
          setFileName("script.py");
        }}
      >
        Switch to script.py
      </button>
      <button onClick={getEditorValue}>Get Editor Value</button>

      <Editor
        height="100vh"
        width="100%"
        theme="vs-dark"
        onMount={handleEditorDidMount}
        options={{
          fontSize: 20,
        }}
        path={file.name}
        defaultLanguage="file.language"
        defaultValue={file.value}
      />

      {/*       
      <Editor
        height="100vh"
        width="100%"
        theme="vs-dark"
        options={{
          fontSize: 20,
        }}
        defaultLanguage="python"
      /> 
      */}
    </div>
  );
}

export default App;
