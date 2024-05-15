import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createNewUser } from "../../redux/actions/authAction";
import { NotificationManager } from "react-notifications";
function RegisterHook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("01000000000");
  const [password, setPassword] = useState("1234567");
  const [confirmPassword, setConfirmPassword] = useState("1234567");
  const [loading, setLoading] = useState(true);
  const onChangeName = (e) => setName(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePhone = (e) => setPhone(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const onChangeConfirmPassword = (e) => setConfirmPassword(e.target.value);
  const errors = useSelector((state) => state.authReducer.errors);
  const res = useSelector((state) => state.authReducer.createUser);
  const lods = useSelector((state) => state.authReducer.loading);

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  const validationValues = () => {
    let isValid = true;
    if (name === "") {
      NotificationManager.error("م تدخل اسم مستخدم ياسطا");
      isValid = false;
    } else if (email === "") {
      NotificationManager.error("م تكتب البريد الإلكتروني");

      isValid = false;
    } else if (!validateEmail(email)) {
      NotificationManager.error("دحل بريد الكتروني شغااااااااااااال");
    } else if (phone.length < 10) {
      NotificationManager.error("دخل رقم تليفون عدل ");
      isValid = false;
    } else if (phone === "") {
      NotificationManager.error("دخل رقم تليفون  ");
      isValid = false;
    } else if (password.length < 6) {
      NotificationManager.error(
        "وفي الاخر نزعل لما الاكونتات تتسرق م انت عامل كلمة سر ضعيفة"
      );
    } else if (password !== confirmPassword) {
      NotificationManager.error("اكد كلمة السر صح ");
      isValid = false;
    }

    return isValid;
  };

  //save data
  const OnSubmit = async (e) => {
    e.preventDefault();
    const isValid = validationValues();
    if (!isValid) {
      return;
    }
    await dispatch(
      createNewUser({
        name,
        email,
        password,
        passwordConfirm: confirmPassword,
        phone,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res && res.data && res.data.token) {
        localStorage.setItem("token", res.data.token);
        NotificationManager.success("تم التسجيل بنجاح");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        if (errors.length >= 1) {
          errors.map((error) => {
            NotificationManager.error(error.msg);
          });
        }
      }
    } else {
      if (!navigator.onLine) {
        NotificationManager.error("شغل النت");
      }
    }
  }, [loading, errors, res]);

  return [
    name,
    email,
    phone,
    password,
    confirmPassword,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfirmPassword,
    OnSubmit,
  ];
}

export default RegisterHook;
