const defaultState = {
  checkbox: {
    all: false,
    noTransfer: false,
    oneTransfer: false,
    twoTransfer: false,
    threeTransfer: false,
  },
};

const checkbox = (state = defaultState, action) => {
  switch (action.type) {
    case "ALL":
      return {
        ...state,
        checkbox: {
          all: !state.checkbox.all,
          noTransfer: !state.checkbox.all,
          oneTransfer: !state.checkbox.all,
          twoTransfer: !state.checkbox.all,
          threeTransfer: !state.checkbox.all,
        },
      };
    case "NO-TRANSFER":
      return {
        ...state,
        checkbox: { ...state.checkbox, noTransfer: !state.checkbox.noTransfer },
      };
    case "ONE-TRANSFER":
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          oneTransfer: !state.checkbox.oneTransfer,
        },
      };
    case "TWO-TRANSFER":
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          twoTransfer: !state.checkbox.twoTransfer,
        },
      };
    case "THREE-TRANSFER":
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          threeTransfer: !state.checkbox.threeTransfer,
        },
      };
    default:
      return state;
  }
};

export { checkbox };
