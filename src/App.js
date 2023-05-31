import { useState } from "react";
import { Header, SideNav } from "./components";
import { SpellCheck, TextToSpeech, SpeechToText } from "./pages";

function App() {
  const [selected, setSelected] = useState(1);
  const renderPage = (id) => {
    if (id === 1) {
      return <SpellCheck />;
    }
    if (id === 2) {
      return <TextToSpeech />;
    }
    return <SpeechToText />;
  };
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <SideNav selected={selected} setSelected={setSelected} />
        {renderPage(selected)}
      </div>
    </div>
  );
}

export default App;
