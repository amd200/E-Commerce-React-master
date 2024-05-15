import React, { useEffect, useState } from "react";
import avatar from "../../images/avatar.png";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../../redux/actions/categoryAction";
import { NotificationManager } from "react-notifications";
function useAddCategoryHook() {
  const [img, setImg] = useState(avatar);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const res = useSelector((state) => state.allCategory.category);
  //to change name state
  const onChangeName = (event) => {
    event.persist();
    setName(event.target.value);
    console.log(name);
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };

  const hadnleSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || selectedFile === null) {
      NotificationManager.warning(
        "Warning message",
        "حدث خطا في ادخال البيانات"
      );
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedFile);
    if (loading) {
      NotificationManager.info("جاري التحميل");
      await dispatch(createCategory(formData));

      setLoading(false);
    }
  };
  useEffect(() => {
    if (loading === false) {
      setName("");
      setImg(avatar);
      setSelectedFile(null);
      setLoading(true);
      if (res.status === 201) {
        NotificationManager.success("Success message", "تم بنجاح");
      } else
        NotificationManager.error(
          "Error message",
          "حدث خطا في اثناء عملية الإضافة"
        );
    }
  }, [loading, res]);

  return [ img, name, setName, onImageChange, hadnleSubmit, onChangeName ];
}

export default useAddCategoryHook;
