import React, { useState, useEffect } from "react";
import firebase from "../Firebase/Config";
import "./Notice.css";
const storage = firebase.storage();
const db = firebase.firestore();

function Notice() {
  const [documents, setDocuments] = useState();
  let no = 0;
  useEffect(() => {
    db.collection("notices")
      .get()
      .then((querySnapshot) => {
        let arr = [];
        querySnapshot.docs.map((doc) => {
          no++;
          arr.push({ fireObj: doc.data(), value: no });
        });
        console.log(no);
        setDocuments(arr);
      });
  }, [db]);
  function getNotice(notice) {
    storage
      .ref("notices")
      .child(`${notice}.pdf`)
      .getDownloadURL()
      .then((url) => {
        window.open(
          `${url}`,
          "_blank",
          "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=700,height=900"
        );
      })
      .catch((error) => {
        // Handle any errors
        console.log(error);
      });
  }
  return (
    <div className="notices">
      <h3>News and Notices</h3>
      <div className="firebase-notice">
        {documents ? (
          <ul>
            {documents.map((items) => (
              <li>
                <div className="notice">
                  <h3>{items.fireObj.title}</h3>
                  <p>{items.fireObj.desc}</p>
                  <a
                    className="read"
                    onClick={() => getNotice(`notice${items.value}`)}
                  >
                    Read More
                  </a>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          "loading"
        )}
      </div>
    </div>
  );
}

export default Notice;
