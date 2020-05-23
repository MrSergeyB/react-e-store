import {
  ADD_INPUT,
  GET_CATEGORIES,
  GET_CATALOG_PRODUCTS,
  SET_LOADING,
  GET_TOP_SALES,
  DELETE_INPUT,
  EDIT_INPUT,
  SET_CURRENT,
  INPUTS_ERROR,
} from "./types";

// Get Top Sales data
export const getTopSalesData = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await fetch("http://localhost:7070/api/top-sales");
    const data = await res.json();
    console.log(data);
    dispatch({
      type: GET_TOP_SALES,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: INPUTS_ERROR,
      payload: err,
    });
  }
};

// Get categories
export const getCategories = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await fetch("http://localhost:7070/api/categories");
    const data = await res.json();
    console.log(data);
    dispatch({
      type: GET_CATEGORIES,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: INPUTS_ERROR,
      payload: err,
    });
  }
};

// Get catalog products
export const getCatalogProducts = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await fetch(" http://localhost:7070/api/items");
    const data = await res.json();
    console.log(data);
    dispatch({
      type: GET_CATALOG_PRODUCTS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: INPUTS_ERROR,
      payload: err,
    });
  }
};

//DELETE INPUT
export const deleteInput = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`http://localhost:7070/api/serviced/:${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_INPUT,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: INPUTS_ERROR,
      payload: err,
    });
  }
};

// //SET CURRENT
// export const setCurrent = (id) => async (dispatch) => {
//   try {
//     setLoading();

//     const res = await fetch(`${http}${id}`);
//     const data = await res.json();

//     dispatch({
//       type: SET_CURRENT,
//       payload: data,
//     });
//   } catch (err) {
//     dispatch({
//       type: INPUTS_ERROR,
//       payload: err,
//     });
//   }
// };

// // EDIT INPUT
// export const editInput = (id, name, price, content) => async (dispatch) => {
//   const editeInput = {id, name, price, content};
//   try {
//     setLoading();

//     const res = await fetch(`${http}`, {
//       method: "POST",
//       body: JSON.stringify(editeInput),
//       headers: {
//         Accept: "application/json, text/plain, */*",
//         "Content-Type": "application/json",
//       },
//     });

//     dispatch({
//       type: EDIT_INPUT,
//       payload: editeInput,
//     });
//   } catch (err) {
//     dispatch({
//       type: INPUTS_ERROR,
//       payload: err,
//     });
//   }
// };

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
