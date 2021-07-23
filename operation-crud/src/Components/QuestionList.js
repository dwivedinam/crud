import React from "react";
import { useState, useEffect, Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ModalExampleCloseIcon from "./FaqModal";
import Modal from "react-modal";
import EditFaq from "./EditFaq";

function QuestionList() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [users, setUser] = useState([]);

  const setModalIsOpenToTrue = async(id) => {

    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  if (modalIsOpen) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }



  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const Result = await axios.get("http://localhost:3003/users");
    console.log("Result--------------", Result);
    setUser(Result.data);
  };
  const deleteUSer = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <div>
      <h2>Question List</h2>

      <ModalExampleCloseIcon></ModalExampleCloseIcon>
      <br />
      <div
        style={{
          margin: "auto",
          height: "auto",
          width: "80%",
          border: "1px solid red",
        }}
      >
        <table className="table border shadow">
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>
                <button onClick={()=>setModalIsOpenToTrue}>Edit</button>
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                  >
                    <button onClick={setModalIsOpenToFalse}>x</button>
                    <EditFaq/>
                  </Modal>
                  <Link
                    className="btn btn-danger"
                    onClick={() => deleteUSer(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default QuestionList;
