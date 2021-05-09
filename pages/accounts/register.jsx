import { useEffect, useState } from "react";
import Link from "next/link";
import { Button, Col, Container, Form, Row, Card } from "react-bootstrap";
import Meta from "@/components/shared/Meta";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { register } from "../../redux/actions/userActions";
import { useRouter } from "next/router";

const registerPage = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const userRegister = useSelector((state) => state.userRegister);

  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, [router, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password1 !== password2) {
      toast.error("Passwords do not match");
    } else {
      dispatch(
        register(first_name, username, last_name, email, password1, password2)
      );
    }
  };
  return (
    <div id="registerPage">
      <Meta title="Cakes & More By Jazmyn | Register" />
      <Container>
        <ToastContainer />
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
                  <h1 className="h3 mb-3 fw-normal">Register</h1>
                  <Form.Group controlId="first_name">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter First Name"
                      value={first_name}
                      onChange={(e) => setFirst_name(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="last_name">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter First Name"
                      value={last_name}
                      onChange={(e) => setLast_name(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      value={password1}
                      onChange={(e) => setPassword1(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="password">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      value={password2}
                      onChange={(e) => setPassword2(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Button block type="submit" className="btn mt-2 mb-5 mb-md-0">
                    Register
                  </Button>
                </Form>
                <small>
                  Already a customer ?{" "}
                  <Link href="./login">
                    <a>Login</a>
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

export default registerPage;
