import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import InputButton from "./InputButton";

interface EventTableProps {
  stateEvent: {
    id: number;
    title: string;
    body: string;
  }[];
  dispatchEvent: React.Dispatch<any>;
  dispatchLog: React.Dispatch<any>;
}

const EventTable: React.FC<EventTableProps> = (props) => {
  return (
    <TableContainer>
      <Table size="small">
        <colgroup>
          <col style={{ width: "10%" }} />
          <col style={{ width: "40%" }} />
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
          {props.stateEvent.map((event) => {
            const onClickEventDelete = () => {
              if (!window.confirm(`本当にイベント(id=${event.id})を削除しますか？？`)) return;
              props.dispatchEvent({
                type: "DELETE_EVENT",
                id: event.id,
              });
              props.dispatchLog({
                type: "CREATE_OPERATE_LOGS",
                description: `イベント(id=${event.id})を削除しました`,
                operatedAt: new Date().toISOString(),
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
  );
};
export default EventTable;
