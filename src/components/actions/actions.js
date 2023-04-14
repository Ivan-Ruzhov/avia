import {
  TICKETS,
  FILTER_MORE_TICKETS,
  SET_CHECKED_lIST,
  SET_CHECK_ALL,
  SET_RADIO,
  BUTTON_SALES,
  BUTTON_FAST,
  BUTTON_OPTIMAL,
} from "./types";

const tickets = (fn) => {
  return async (dispatch) => {
    const res = await fn;
    dispatch({
      type: TICKETS,
      arr: res,
    });
  };
};

const moreTickets = () => ({ type: FILTER_MORE_TICKETS });

const setCheckedList = (payload) => ({
  type: SET_CHECKED_lIST,
  payload,
});

const setCheckAll = (payload) => ({
  type: SET_CHECK_ALL,
  payload,
});

const setRadio = (payload) => ({
  type: SET_RADIO,
  payload,
});

const onSale = (payload) => ({
  type: BUTTON_SALES,
  payload,
});

const onOptimal = () => ({ type: BUTTON_OPTIMAL });

const onFast = () => ({ type: BUTTON_FAST });

export {
  tickets,
  moreTickets,
  setRadio,
  setCheckAll,
  setCheckedList,
  onSale,
  onFast,
  onOptimal,
};
