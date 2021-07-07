import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import firebase from "../Components/Firebase/Config";
import "./Form.css";

function Form() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [father, setFatherName] = useState("");
  const [zip, setZip] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [forms, setForm] = useState(null);
  const ref = firebase.firestore().collection("form");
  function addForm(newForm) {
    ref
      .doc()
      .set(newForm)
      .catch((err) => {
        console.error(err);
      });
  }
  function getForm() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setForm(items);
    });
  }

  function checkValidation() {
    if (name === "" || father === "" || address === "" || zip === "") {
      setError(true);
    } else {
      setError(false);
      handleShow();
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    checkValidation();
  }
  return (
    <div className="container">
      <h3>Online Registeration</h3>
      {error ? <h2>there is error</h2> : ""}
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputName">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Email"
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputFatherName">Father Name</label>
            <input
              value={father}
              onChange={(e) => setFatherName(e.target.value)}
              type="text"
              className="form-control"
              id="inputPassword4"
              placeholder="Father name"
            />
          </div>
        </div>
        <div className="form-group">
          <label for="inputAddress">Permanant Address</label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="permanant address"
          />
        </div>
        <div className="form-group">
          <label for="inputAddress2">Temporary Address </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="temporary address"
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="form-group col-md-4">
            <label for="inputState">State</label>
            <select id="inputState" className="form-control">
              <option>Choose...</option>
              <option>...</option>
              <option>Province 1</option>
              <option>Province 2</option>
              <option>Province 3</option>
              <option>Province 4</option>
              <option>Province 5</option>
              <option>Province 6</option>
              <option>Province 7</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Applicant details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            <div className="Inputcss">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                value={father}
                onChange={(e) => setFatherName(e.target.value)}
              />
              <input
                type="text"
                value={address}
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              setForm({ name, father, address, zip });
              console.log(forms);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Form;
