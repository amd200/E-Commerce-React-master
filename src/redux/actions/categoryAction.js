import useGetData from "../../hooks/useGetData";
import {
  useInsertData,
  useInsertDataWithImage,
} from "../../hooks/useInsertData";
import { CREATE_CATEGORY, GET_ALL_CATEGORY, GET_ERROR } from "../type";

export const getAllCategory = (limit) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/categories?limit=${limit}`);

    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
export const getAllCategoryPage = (limit, page) => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/categories?limit=${limit}&page=${page}`
    );

    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
export const createCategory = (formData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage(
      `/api/v1/categories`,
      formData
    );

    dispatch({
      type: CREATE_CATEGORY,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
