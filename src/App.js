import React from "react";
import { useState } from "react";

const App = () => {
  const [text, setText] = useState(" ");
  const [inputDown, setInputDown] = useState("false");
  const [message, setMessage] = useState("Поле ввода не должно быть пустым");
  const [isEmpty, setIsEmpty] = useState(true);
  const [error, setError] = useState("true");

  const blurHadler = (e) => {
    setInputDown(true);
    setMessage("Поле ввода не должно быть пустым");
    ServiceWorkerRegistration(true);
  };

  const textHandler = (e) => {
    setText(e.target.value);
    if (e.target.value) {
      setIsEmpty(false);
      setMessage("");
      setMessage("");
      setError(false);
    }
    if (!e.target.value) {
      setIsEmpty(true);
      setMessage("Поле ввода не должно быть пустым");
      setError(true);
    }
  };

  const getText = () => {
    setIsEmpty(true);
    console.log(text);
    setText("");
    setMessage("Сообщение успешно отправлено");
    setError(false);
  };

  // const handleSetText = (e) => {
  //   setText(e.target.value);
  //   if (text) {
  //     setIsEmpty(false);
  //   }
  // };
  // const handleClick = (e) => {
  //   console.log(text);
  //   setText("");
  //   setMessage()

  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log(text);
  //   // setText('');
  //   // setIsEmpty(true)
  // };

  return (
    <div className="app">
      <form onClaick={(e) => e.preventDefault}>
        <input type="text" value={text} onChange={(e) => textHandler(e)} />
        <form />
        <button onClick={(e) => getText()} disabled={isEmpty} type="submit">
          Добавить
        </button>
        {inputDown && message && (
          <div className={`${error === true ? "is-error" : "no-error"}`}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default App;
// {isEmpty} ? 'Поле ввода не должно быть пустым' : {handleClick} ? 'Сообщение успешно отправлено'}
