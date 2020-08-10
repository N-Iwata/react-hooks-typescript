type CreateOperateLogsAction = {
  type: "CREATE_OPERATE_LOGS";
  description: string;
  operatedAt: string;
};
type DeleteAllOperateLogsAction = {
  type: "DELETE_ALL_OPERATE_LOGS";
};

export type OperateLogsActions = CreateOperateLogsAction | DeleteAllOperateLogsAction;
