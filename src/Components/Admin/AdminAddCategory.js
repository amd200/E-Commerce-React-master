import React from "react";
import { Col, Row } from "react-bootstrap";
import useAddCategoryHook from "../../hook/Category/AddCategoryHook";
const AdminAddCategory = () => {
  const { img, name, setName, onImageChange, hadnleSubmit, onChangeName } =
    useAddCategoryHook();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
        <Col sm="8">
          <div className="text-form pb-2">صوره التصنيف</div>
          <label htmlFor="upload-photo">
            <img
              src={img}
              style={{ cursor: "pointer" }}
              alt=""
              height="100px"
              width="120px"
            />
          </label>
          <input
            type="file"
            id="upload-photo"
            onChange={onImageChange}
            className="d-none"
          />
          <input
            type="text"
            onChange={onChangeName}
            value={name}
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={hadnleSubmit} className="btn-save d-inline mt-2 ">
            حفظ التعديلات
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default AdminAddCategory;
