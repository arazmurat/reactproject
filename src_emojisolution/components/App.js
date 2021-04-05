import React from "react";
import "../styles.css";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

export default function App() {
  console.log(emojipedia);
  return (
    <div>
      <h1>
        <span>EMOJIPEDIA</span>
      </h1>
      <div className="dictionary">
        {emojipedia.map((emojiItem) => (
          <Entry
            key={emojiItem.id}
            emoji={emojiItem.emoji}
            name={emojiItem.name}
            description={emojiItem.meaning}
          />
        ))}
      </div>
    </div>
  );
}

//const element = <Welcome name="Sara" />;
//ReactDOM.render(
//  element,
//  document.getElementById('root')
//);
