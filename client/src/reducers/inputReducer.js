import {
  GET_TOP_SALES,
  GET_CATALOG_PRODUCTS,
  ADD_INPUT,
  SET_LOADING,
  DELETE_INPUT,
  SET_CURRENT,
  EDIT_INPUT,
  INPUTS_ERROR,
  GET_CATEGORIES,
} from "../actions/types";

const intialState = {
  products: null,
  catalogProducts: null,
  loading: false,
  error: null,
  categories: null,
};

export default (state = intialState, action) => {
  switch (action.type) {
    case GET_TOP_SALES:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };

    case GET_CATALOG_PRODUCTS:
      return {
        ...state,
        catalogProducts: action.payload,
        loading: false,
      };

    case SET_LOADING:
      return {...state, loading: true};

    case ADD_INPUT:
      return {
        ...state,
        list: [
          ...state.list,
          {
            name: action.name,
            content: action.content,
            price: action.price,
          },
        ],
        loading: false,
      };

    case DELETE_INPUT:
      return {
        ...state,
        list: [...state.list.filter((input) => input.id !== action.payload)],
        loading: false,
      };

    case EDIT_INPUT:
      return {
        ...state,
        list: [
          ...state.list.filter((input) => input.id !== action.payload.id),
          {
            id: action.payload.id,
            name: action.payload.name,
            contenе: action.payload.content,
            price: action.payload.price,
          },
        ],
        editMode: false,
        editItem: {},
        loading: false,
      };

    case SET_CURRENT:
      return {
        ...state,
        editMode: true,
        editItem: action.payload,
        loading: false,
      };

    case INPUTS_ERROR:
      console.error(`popa ${action.payload}`);
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
