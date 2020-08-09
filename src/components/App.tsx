import React, { useState, useReducer } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import InputField from "./InputField";
import InputButton from "./InputButton";
import { events, initialState } from "../reducers";
import "../styles/style.scss";

const App: React.FC = () => {
  const [state, dispatch] = useReducer(events, initialState);
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const onClickAdd = () => {
    dispatch({
      type: "CREATE_EVENT",
      title: title,
      body: body,
    });
    setTitle("");
    setBody("");
  };
  const onClickAllEventsDelete = () => {
    dispatch({
      type: "DELETE_ALL_EVENTS",
    });
  };
  const onClickAllOperateLogDelete = () => {
    dispatch({
      type: "DELETE_ALL_EVENTS",
    });
  };
  const onChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onChangeBody = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setBody(e.target.value);
  };

  const isDisabledAdd = title === "" || body === "";
  const isDisabledAllEventDelete = state.length === 0 ? true : false;
  const isDisabledOperateLogDelete = true;

  return (
    <div className="container">
      <h4>イベント作成フォーム</h4>
      <InputField label={"タイトル"} disabled={false} onChange={onChangeTitle} multiline={false} rows={1} value={title} />
      <InputField label={"ボディー"} disabled={false} onChange={onChangeBody} multiline={true} rows={3} value={body} />
      <InputButton type={"button"} text={"イベントを作成する"} disabled={isDisabledAdd} color="primary" onClick={onClickAdd} />
      <InputButton type={"button"} text={"イベントを全て削除する"} disabled={isDisabledAllEventDelete} color="secondary" onClick={onClickAllEventsDelete} />
      <InputButton type={"button"} text={"操作ログを全て削除する"} disabled={isDisabledOperateLogDelete} color="secondary" onClick={onClickAllOperateLogDelete} />

      <h4>イベント一覧</h4>

      <TableContainer>
        <Table aria-label="simple table">
          <colgroup>
            <col style={{ width: "10%" }} />
            <col style={{ width: "30%" }} />
            <col style={{ width: "50%" }} />
            <col style={{ width: "10%" }} />
          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Body</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.map((event) => {
              const onClickEventDelete = () => {
                dispatch({
                  type: "DELETE_EVENT",
                  id: event.id,
                });
              };
              return (
                <TableRow key={event.id.toString()}>
                  <TableCell component="th" scope="row">
                    {event.id}
                  </TableCell>
                  <TableCell>{event.title}</TableCell>
                  <TableCell>{event.body}</TableCell>
                  <TableCell>
                    <InputButton type={"button"} text={"削除"} disabled={false} color="secondary" onClick={onClickEventDelete} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default App;
