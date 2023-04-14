import {
  TICKETS,
  BUTTON_FAST,
  BUTTON_OPTIMAL,
  BUTTON_SALES,
} from "../actions/types";

const defaultState = {
  tickets: [],
};
const totalDuration = (data) => {
  return data.segments.reduce((acc, prev) => (acc += prev.duration), 0);
};

const ticketReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TICKETS:
      const ticket = action.arr.tickets.map((el) => {
        return {
          price: el.price,
          logo: el.carrier,
          segments: el.segments,
        };
      });
      return {
        tickets: ticket,
      };
    case BUTTON_SALES:
      return {
        tickets: state.tickets.sort((a, b) => {
          return a.price - b.price;
        }),
      };
    case BUTTON_FAST:
      return {
        ...state,
        tickets: state.tickets.sort((a, b) => {
          const overalDuration = ({ segments }) =>
            segments.reduce((acc, { duration }) => acc + duration, 0);
          return overalDuration(a) - overalDuration(b);
        }),
      };
    case BUTTON_OPTIMAL:
      return {
        ...state,
        tickets: state.tickets.sort((a, b) => {
          const optimalPrev = a.price + totalDuration(a);
          const optimalNext = b.price + totalDuration(b);
          return optimalPrev - optimalNext;
        }),
      };
    default:
      return state;
  }
};

export { ticketReducer };
