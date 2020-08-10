import { OperateLogsActions } from "../actions/OperateLogs";

type OperateLogsState = {
  description: string;
  operatedAt: string;
}[];

export const initialStateLogs: OperateLogsState = [];

export const logs = (state: OperateLogsState, action: OperateLogsActions) => {
  switch (action.type) {
    case "CREATE_OPERATE_LOGS":
      const operateLog = { description: action.description, operatedAt: action.operatedAt };
      return [operateLog, ...state];
    case "DELETE_ALL_OPERATE_LOGS":
      return initialStateLogs;
    default:
      throw new Error();
  }
};
