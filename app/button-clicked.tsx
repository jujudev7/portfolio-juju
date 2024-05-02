import { useRef } from "react";
import "./App.css";

function App() {
  const isButtonClicked = useRef(false);
  const onClick = () => {
    if (isButtonClicked.current) {
      console.log("Already clicked");
      return;
    }
    console.log("Clicked");
    isButtonClicked.current = true;
  };

  return (
    <div>
        <p>{JSON.stringify(isButtonClicked)}</p> {/* Lorsque l'on clique, isButtonClicked passe à true, mais l'interface ne change pas (false), on n'a pas re-render, et c'est ce que l'on veut avec useRef, stocker une valeur sans influencer le render. 
        C'est interdit, on n'affiche pas une ref dans la vue, on n'affiche pas une ref dans le JSX ! */}
      <button onClick={onClick}>Test</button>
    </div>
  );
}

export default App;
