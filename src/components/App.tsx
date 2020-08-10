import React, { useState, useEffect, useReducer } from "react";

import InputField from "./InputField";
import InputButton from "./InputButton";
import EventTable from "./EventTable";
import OperateLogsTable from "./OperateLogsTable";

import { events, initialStateEvent } from "../reducers/Events";
import { logs, initialStateLogs } from "../reducers/OperateLogs";
import "../styles/style.scss";

const App: React.FC = () => {
  const localEvents = localStorage.getItem("events");
  const localLogs = localStorage.getItem("logs");
  const [stateEvent, dispatchEvent] = useReducer(events, localEvents ? JSON.parse(localEvents) : initialStateEvent);
  const [stateLogs, dispatchLog] = useReducer(logs, localLogs ? JSON.parse(localLogs) : initialStateLogs);
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(stateEvent));
  }, [stateEvent]);

  useEffect(() => {
    localStorage.setItem("logs", JSON.stringify(stateLogs));
  }, [stateLogs]);

  const onClickAdd = () => {
    dispatchEvent({
      type: "CREATE_EVENT",
      title: title,
      body: body,
    });

    dispatchLog({
      type: "CREATE_OPERATE_LOGS",
      description: "イベントを追加しました",
      operatedAt: new Date().toISOString(),
    });

    setTitle("");
    setBody("");
  };
  const onClickAllEventsDelete = () => {
    if (!window.confirm("本当にすべてのイベントを削除しますか？？")) return;

    dispatchEvent({
      type: "DELETE_ALL_EVENTS",
    });
    dispatchLog({
      type: "CREATE_OPERATE_LOGS",
      description: "イベントをすべて削除しました",
      operatedAt: new Date().toISOString(),
    });
  };
  const onClickAllOperateLogDelete = () => {
    if (!window.confirm("本当にすべての操作ログを削除しますか？？")) return;
    dispatchLog({
      type: "DELETE_ALL_OPERATE_LOGS",
    });
  };
  const onChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onChangeBody = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setBody(e.target.value);
  };

  const isDisabledAdd = title === "" || body === "";
  const isDisabledAllEventDelete = stateEvent.length === 0 ? true : false;
  const isDisabledOperateLogDelete = stateLogs.length === 0 ? true : false;

  return (
    <div className="container">
      <h4>イベント作成フォーム</h4>
      <InputField label={"タイトル"} disabled={false} onChange={onChangeTitle} multiline={false} rows={1} value={title} />
      <InputField label={"ボディー"} disabled={false} onChange={onChangeBody} multiline={true} rows={3} value={body} />
      <InputButton type={"button"} text={"イベントを作成する"} disabled={isDisabledAdd} color="primary" onClick={onClickAdd} />
      <InputButton type={"button"} text={"イベントを全て削除する"} disabled={isDisabledAllEventDelete} color="secondary" onClick={onClickAllEventsDelete} />
      <InputButton type={"button"} text={"操作ログを全て削除する"} disabled={isDisabledOperateLogDelete} color="secondary" onClick={onClickAllOperateLogDelete} />

      <h4>イベント一覧</h4>
      <EventTable stateEvent={stateEvent} dispatchEvent={dispatchEvent} dispatchLog={dispatchLog} />

      <h4>操作ログ一覧</h4>
      <OperateLogsTable stateLogs={stateLogs} />
    </div>
  );
};

export default App;
