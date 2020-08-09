import { CREATE_EVENT, DELETE_EVENT, DELETE_ALL_EVENTS } from "../actions";

type State = {
  id: number;
  title: string;
  body: string;
}[];

export const initialState: State = [];

export const reducer = (state: State, action: any) => {
  switch (action.type) {
    case CREATE_EVENT:
      const event = { title: action.title, body: action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];
    case DELETE_EVENT:
      return state;
    case DELETE_ALL_EVENTS:
      return state;
    default:
      throw new Error();
  }
};
