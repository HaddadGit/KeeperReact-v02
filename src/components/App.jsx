import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);
  function handlerItems(title, content) {
    const text = { title: title, content: content };
    setItems(preValue => {
      return [...preValue, text];
    });
  }
  function handlerDelete(id) {
    setItems(preValue => {
      return preValue.filter((value, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={handlerItems} />
      {items.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            delete={handlerDelete}
          />
        );
      })}
    </div>
  );
}

export default App;
