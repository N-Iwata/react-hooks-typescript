type CreateEventsAction = {
  type: "CREATE_EVENT";
  title: string;
  body: string;
};
type DeleteEventsAction = {
  type: "DELETE_EVENT";
  id: number;
};
type DeleteAllEventsAction = {
  type: "DELETE_ALL_EVENTS";
};

export type EventsActions = CreateEventsAction | DeleteEventsAction | DeleteAllEventsAction;
