import { EventsActions } from "../actions/Events";

type EventsState = {
  id: number;
  title: string;
  body: string;
}[];

export const initialStateEvent: EventsState = [];

export const events = (state: EventsState, action: EventsActions) => {
  switch (action.type) {
    case "CREATE_EVENT":
      const event = { title: action.title, body: action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];
    case "DELETE_EVENT":
      return state.filter((event) => event.id !== action.id);
    case "DELETE_ALL_EVENTS":
      return initialStateEvent;
    default:
      throw new Error();
  }
};
