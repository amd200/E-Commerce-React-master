import React, { useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "./../Category/CategoryCard";
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";
import SubTiltle from "../Uitily/SubTiltle";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
const CategoryContainer = ({ data, loading }) => {
  const colors = [
    "#FFD3E8",
    "#F4DBA5",
    "#55CFDF",
    "#FF6262",
    "#0034FF",
    "#FFD3E8",
  ];
  return (
    <Container>
      <div className="admin-content-text mt-2 ">كل التصنيفات</div>
      <Row className="my-2 d-flex justify-content-between">
        {loading == false ? (
          data ? (
            data.map((item, i) => (
              <CategoryCard
                key={i}
                title={item.name}
                img={item.image}
                background={colors[Math.floor(Math.random() * colors.length)]}
              />
            ))
          ) : (
            <h4>لا يوجدد تصنيفات</h4>
          )
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </Row>
    </Container>
  );
};

export default CategoryContainer;
