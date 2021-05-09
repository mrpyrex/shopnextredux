import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { listProducts } from "redux/actions/productActions";
import { wrapper } from "redux/store";

const shopPage = () => {
  const { products } = useSelector((state) => state.productList);
  console.log(products);

  return (
    <Container>
      <Row>
        <Col md={8}>
          <h2>Shop</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default shopPage;

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ req, store }) => {
    await store.dispatch(listProducts(req));
  }
);

// export async function getServerSideProps(context) {
//   const res = await fetch(`http://localhost:8000/api/shop/`);
//   const data = await res.json();

//   console.log(data);

//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }
