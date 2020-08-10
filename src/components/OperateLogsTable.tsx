import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

interface OperateLogsTableProps {
  stateLogs: {
    description: string;
    operatedAt: string;
  }[];
}

const OperateLogsTable: React.FC<OperateLogsTableProps> = (props) => {
  return (
    <TableContainer>
      <Table size="small">
        <colgroup>
          <col style={{ width: "60%" }} />
          <col style={{ width: "40%" }} />
        </colgroup>
        <TableHead>
          <TableRow>
            <TableCell>内容</TableCell>
            <TableCell>日時</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.stateLogs.map((log, index) => {
            return (
              <TableRow key={index.toString()}>
                <TableCell>{log.description}</TableCell>
                <TableCell>{log.operatedAt}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default OperateLogsTable;
