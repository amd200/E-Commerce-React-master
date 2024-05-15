import React, { useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/authAction";
import { json } from "react-router-dom";

function LoginHook() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("user11@gmail.com");
  const [password, setPassword] = useState("1234567");
  const [loading, setLoading] = useState(true);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const res = useSelector((state) => state.authReducer.loginUser);
  const erros = useSelector((state) => state.authReducer.erros);
  const [isPress, setIsPress] = useState(false);
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  const validationValues = () => {
    let isValid = true;
    if (email === "") {
      NotificationManager.error("م تكتب البريد الإلكتروني");
      isValid = false;
    } else if (!validateEmail(email)) {
      NotificationManager.error("دحل بريد الكتروني شغااااااااااااال");
    } else if (password === "") {
      NotificationManager.error("دخل الباسورد");
      isValid = false;
    }

    return isValid;
  };

  const OnSubmit = async (e) => {
    e.preventDefault();
    setIsPress(true);
    const isValid = validationValues();
    if (!isValid) {
      return;
    }
    await dispatch(loginUser({ email, password }));
    setLoading(false);
    setIsPress(false);
  };
  useEffect(() => {
    if (loading === false) {
      if (res) {
        if (res.data && res.data.token) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.data));
          NotificationManager.success("تم تسجيل الدخول بنجاح");
        //   setTimeout(() => {
        //     window.location.href = "/";
        //   }, 1500);
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          if (res.data.errors) {
            res.data.errors.map((error) => {
              NotificationManager.error(error.msg);
            });
          } else {
            NotificationManager.error(res.data.message);
          }
        }
      }
      setLoading(true);
    }
  });
  return [email, password, onChangePassword, onChangeEmail, OnSubmit, isPress];
}
export default LoginHook;
