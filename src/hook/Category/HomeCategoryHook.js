import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
function HomeCategoryHook() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);
  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);
  const colors = [
    "#FFD3E8",
    "#F4DBA5",
    "#55CFDF",
    "#FF6262",
    "#0034FF",
    "#FFD3E8",
  ];

  return { category, loading, colors };
}

export default HomeCategoryHook;
