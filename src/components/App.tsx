import React, { useState, useReducer } from "react";
import InputField from "./InputField";
import InputButton from "./InputButton";

import { reducer, initialState } from "../reducers";

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const onClickAdd = () => {
    dispatch({
      type: "CREATE_EVENT",
      title: title,
      body: body,
    });
  };
  const onChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onChangeBody = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setBody(e.target.value);
  };

  const isDisabledAdd = title === "" || body === "";

  return (
    <div>
      <h4>イベント作成フォーム</h4>
      <InputField label={"タイトル"} disabled={false} onChange={onChangeTitle} />
      <InputField label={"ボディー"} disabled={false} onChange={onChangeBody} />
      <InputButton
        type={"button"}
        text={"イベントを作成する"}
        disabled={isDisabledAdd}
        color="primary"
        onClick={onClickAdd}
      />
      <ul>
        {state.map((event, index) => {
          return <li key={index.toString()}>{event.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
