import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginHook from "../../hook/Auth/LoginHook";

const LoginPage = () => {
  const [email, password, onChangePassword, onChangeEmail, OnSubmit, isPress] =
    LoginHook();
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">تسجيل الدخول</label>
          <input
            placeholder="الايميل..."
            onChange={onChangeEmail}
            value={email}
            type="text"
            className="user-input my-3 text-center mx-auto"
          />
          <input
            placeholder="كلمه السر..."
            onChange={onChangePassword}
            value={password}
            type="password"
            className="user-input text-center mx-auto"
          />
          <button onClick={OnSubmit} className="btn-login mx-auto mt-4">
            تسجيل الدخول
          </button>
          <label className="mx-auto my-4">
            ليس لديك حساب ؟{" "}
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                اضغط هنا
              </span>
            </Link>
          </label>
        </Col>

        <label className="mx-auto my-4">
          <Link to="/admin/allproducts" style={{ textDecoration: "none" }}>
            <span style={{ cursor: "pointer" }} className="text-danger">
              الدخول ادمن
            </span>
          </Link>

          <Link to="/user/allorders" style={{ textDecoration: "none" }}>
            <span style={{ cursor: "pointer" }} className="text-danger mx-3">
              الدخول مستخدم
            </span>
          </Link>
          {isPress  ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : null}
        </label>
      </Row>
    </Container>
  );
};

export default LoginPage;
