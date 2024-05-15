import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategory,
  getAllCategoryPage,
} from "../../redux/actions/categoryAction";
function CategoryPageHook() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);
  console.log(category);
  let pageCount = 0;
  if (category.paginationResult) {
    pageCount = category.paginationResult.numberOfPages;
  }

  const getPage = (page) => {
    dispatch(getAllCategoryPage(6, page));
  };
  useEffect(() => {
    dispatch(getAllCategory(6));
  }, [dispatch]);

  return { category, loading, pageCount, getPage };
}

export default CategoryPageHook;
