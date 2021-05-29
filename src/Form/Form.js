import React, { useState } from "react";
import firebase from "../Components/Firebase/Config";

function Form() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [father, setFatherName] = useState("");
  const [zip, setZip] = useState("");
  const [form, setForm] = useState([]);
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
      setTimeout(function () {
        setForm(items);
        console.log(form);
      }, 5000);
    });
  }

  function emptyForm() {
    setName("");
    setAddress("");
    setFatherName("");
    setZip("");
  }
  return (
    <div className="container">
      <h3>this is the form</h3>
      <form>
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
              placeholder="Password"
            />
          </div>
        </div>
        <div className="form-group">
          <label for="inputAddress">Address</label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="form-group">
          <label for="inputAddress2">Address 2</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
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
              <option selected>Choose...</option>
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
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            addForm({
              name,
              address,
              father,
              zip,
            });
            emptyForm();
            getForm();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
