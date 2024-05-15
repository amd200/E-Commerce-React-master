import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RegisterHook from "../../hook/Auth/RegisterHook";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [
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
  ] = RegisterHook();

  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center hieght-search">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">تسجيل حساب جديد</label>
          <input
            placeholder="اسم المستخدم..."
            onChange={onChangeName}
            value={name}
            type="text"
            className="user-input my-4 text-center mx-auto"
          />
          <input
            placeholder="الايميل..."
            onChange={onChangeEmail}
            value={email}
            type="email"
            className="user-input mb-4 text-center mx-auto"
          />
          <input
            placeholder="رقم الهاتف..."
            onChange={onChangePhone}
            value={phone}
            type="number"
            className="user-input mb-4 text-center mx-auto"
          />
          <input
            placeholder="كلمه السر..."
            onChange={onChangePassword}
            value={password}
            type="password"
            className="user-input mb-4 text-center mx-auto"
          />
          <input
            placeholder="تأكيد كلمه السر..."
            onChange={onChangeConfirmPassword}
            value={confirmPassword}
            type="password"
            className="user-input mb-4 text-center mx-auto"
          />
          <button onClick={OnSubmit} className="btn-login mx-auto mt-4">
            تسجيل الحساب
          </button>
          <label className="mx-auto my-4">
            لديك حساب بالفعل؟
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                اضغط هنا
              </span>
            </Link>
          </label>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
