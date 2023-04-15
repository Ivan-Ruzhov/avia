import {
  TICKETS,
  BUTTON_FAST,
  BUTTON_OPTIMAL,
  BUTTON_SALES,
} from "../actions/types";

const defaultState = {
  tickets: [],
  stop: "",
};
const totalDuration = (data) => {
  return data.segments.reduce((acc, prev) => (acc += prev.duration), 0);
};

const ticketReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TICKETS:
      console.log(action.arr.stop);
      const ticket = action.arr.tickets.map((el) => {
        return {
          price: el.price,
          logo: el.carrier,
          segments: el.segments,
        };
      });
      return {
        tickets: ticket,
        stop: action.arr.stop,
      };
    case BUTTON_SALES:
      const arrSale = state.tickets.slice(0);
      return {
        tickets: arrSale.sort((a, b) => {
          return a.price - b.price;
        }),
      };
    case BUTTON_FAST:
      const arrFast = state.tickets.slice(0);
      return {
        ...state,
        tickets: arrFast.sort((a, b) => {
          const overalDuration = ({ segments }) =>
            segments.reduce((acc, { duration }) => acc + duration, 0);
          return overalDuration(a) - overalDuration(b);
        }),
      };
    case BUTTON_OPTIMAL:
      const arrOptimal = state.tickets.slice(0);
      return {
        ...state,
        tickets: arrOptimal.sort((a, b) => {
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
