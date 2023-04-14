import { SET_CHECK_ALL, SET_CHECKED_lIST, SET_RADIO } from "../actions/types";

const initialState = {
  checkedList: ["Без пересадок", "1 пересадка", "2 пересадки", "3 пересадки"],
  checkAll: true,
  radio: "a",
};

const checkboxOptions = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHECKED_lIST:
      return { ...state, checkedList: action.payload };
    case SET_CHECK_ALL:
      return { ...state, checkAll: action.payload };
    case SET_RADIO:
      return { ...state, radio: action.payload };
    default:
      return state;
  }
};
const filterOfStops = (tickets, checkedList) => {
  const newCheckedList = checkedList.map((item) => {
    switch (item) {
      case "Без пересадок":
        return 0;
      case "1 пересадка":
        return 1;
      case "2 пересадки":
        return 2;
      case "3 пересадки":
        return 3;
      default:
        return 0;
    }
  });
  const newTicketsList = tickets.filter(
    (ticket) =>
      newCheckedList.includes(ticket.segments[0].stops.length) &&
      newCheckedList.includes(ticket.segments[1].stops.length)
  );
  return newTicketsList;
};

export { checkboxOptions, filterOfStops };
