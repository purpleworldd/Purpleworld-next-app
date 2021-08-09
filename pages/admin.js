import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import firebase from "../config/firebase";
import { useAuth } from "../context/AuthContext";
import { Button, Card, Container, Row, Col, Spinner } from "react-bootstrap";

function Redirect({ to }) {
  const router = useRouter();

  useEffect(() => {
    router.push(to);
  }, [to]);

  return null;
}

function Admin() {
  const { currentUser, logout } = useAuth();

  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);

  const customerRef = firebase.firestore().collection("Customers");

  function getCustomers() {
    if (currentUser) {
      setLoading(true);
      customerRef.get().then((item) => {
        const items = item.docs.map((doc) => doc.data());
        setCustomers(items);
        setLoading(false);
      });
    }
  }

  useEffect(() => {
    getCustomers();
  }, []);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  if (loading) {
    return (
      <Container className="my-5 py-5 text-center">
        <Head>
          <title>Admin | PurpleWorld</title>
        </Head>
        <br />
        <br />
        <p>
          <Spinner animation="border" />
          <span className="h1"> loading...</span>
        </p>
      </Container>
    );
  }

  return (
    <Container className="text-center my-5 py-5">
      <Head>
        <title>Admin | PurpleWorld</title>
      </Head>
      <h1 className="text-center fw-bold py-5">Customers that contacted</h1>
      <Row className="justify-content-center">
        {customers.map((customer, index) => (
          <Col key={index} md={6} xs={12} className="align-items-stretch">
            <Card className="h-100">
              <Card.Header>
                {customer.firstName + " " + customer.lastName}
              </Card.Header>
              <Card.Body>
                <p>Email: {customer.email}</p>
                <p>Mobile: {customer.locale + " " + customer.mobile}</p>
                <p>
                  {customer.address ? "Address: " + customer.address : null}
                </p>
                <p>City: {customer.city}</p>
                <p>Pin: {customer.pin}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <br />
      <br />
      <br />
      <br />
      <Button
        role="button"
        onClick={async () => {
          try {
            await logout();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        LOGOUT
      </Button>
    </Container>
  );
}

export default Admin;
