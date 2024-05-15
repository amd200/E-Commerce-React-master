import React from "react";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Uitily/Pagination";

import CategoryPageHook from "../../hook/Category/CategoryPageHook";
const AllCategoryPage = () => {
  const { category, loading, pageCount, getPage } = CategoryPageHook();
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer data={category.data} loading={loading} />
      {pageCount > 1 && <Pagination pageCount={pageCount} onPress={getPage} />}
    </div>
  );
};

export default AllCategoryPage;
