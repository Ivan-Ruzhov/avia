import {
  TICKETS,
  FILTER_MORE_TICKETS,
  SET_CHECKED_lIST,
  SET_CHECK_ALL,
  SET_RADIO,
  BUTTON_SALES,
  BUTTON_FAST,
  BUTTON_OPTIMAL,
  LOADING_END,
  LOADING_BEGIN,
  STOP_STATIC,
  STOP_INC,
  ERROR,
} from "./types";

const ticket = (fn) => {
  console.log("fetch");
  return async (dispatch) => {
    try {
      const res = await fn;
      dispatch({ type: TICKETS, arr: res });
      if (!res.stop) {
        dispatch(stopInc());
      } else {
        dispatch(stopStatic());
        dispatch(loadingEnd());
      }
    } catch (err) {
      dispatch(error());
      throw new Error(err);
    }
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

const stopInc = () => ({ type: STOP_INC });

const stopStatic = () => ({ type: STOP_STATIC });

const loadingBegin = () => ({ type: LOADING_BEGIN });

const loadingEnd = () => ({ type: LOADING_END });

const error = () => ({ type: ERROR });

export {
  ticket,
  moreTickets,
  setRadio,
  setCheckAll,
  setCheckedList,
  onSale,
  onFast,
  onOptimal,
  loadingBegin,
};
