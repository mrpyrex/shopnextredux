import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Meta from "@/components/shared/Meta";
import { login } from "../../redux/actions/userActions";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Loader from "../../components/shared/Loader";
import { ToastContainer, toast } from "react-toastify";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import styles from "../../styles/Login.module.css";

const loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  const router = useRouter();

  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, [router, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    // const hasEmptyFields = Object.values(values).some(
    //   (element) => element === ""
    // );
    dispatch(login(email, password));
  };

  return (
    <div id="loginPage">
      <Meta title="Cakes & More By Jazmyn | Login" />
      {loading && <Loader />}

      {/* {error && <Message variant='danger'>{error}</Message>} */}
      <Container>
        <Row className="my-4">
          <Col md={{ span: 6, offset: 3 }}>
            <main className="form-signin">
              <Card className="p-4">
                <Form onSubmit={submitHandler}>
                  <img
                    className="mb-4"
                    src="/docs/5.0/assets/brand/bootstrap-logo.svg"
                    alt=""
                    width="72"
                    height="57"
                  />
                  <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                  <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      required
                      type="password"
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Button block type="submit" className="btn mt-2 mb-2 w-100">
                    Sign in
                  </Button>
                  <FacebookLogin
                    appId="1088597931155576"
                    autoLoad
                    render={(renderProps) => (
                      <button
                        className={styles.fbbtn}
                        onClick={renderProps.onClick}
                      >
                        Login With Facebook
                      </button>
                    )}
                  />
                </Form>
                <small className="mt-2">
                  New customer ?{" "}
                  <Link href="./register">
                    <a>Register</a>
                  </Link>{" "}
                </small>
              </Card>
            </main>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default loginpage;
