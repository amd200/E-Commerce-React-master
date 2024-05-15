import React, { useEffect } from "react";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Uitily/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";

const AllCategoryPage = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);
  let pageCount = 0;
  if (category.paginationResult) {
    pageCount = category.paginationResult.numberOfPages;
  }
  const getPage = (page) => {
    console.log(page);
  };
  useEffect(() => {
    dispatch(getAllCategory(4));
  }, [dispatch]);

  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer data={category.data} loading={loading} />
      <Pagination pageCount={pageCount} onPress={getPage} />
    </div>
  );
};

export default AllCategoryPage;
