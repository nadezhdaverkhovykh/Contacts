import React from "react";
import "./Modal.css";
const Modal = ({ setShow }) => {
  return (
    <div className="modal">
      <form className="modal_form">
        <p className="modal_text">Add new contact</p>
        <div className="modal_add">
          {/* <img src="./src/male_icon.png" alt="" /> */}
          <input type="file" name="image" id="profile_pic" />
          <br />
          {/* <img id="img" src="" alt="" width="70px" height="70px" /> */}
        </div>

        <input
          type="text"
          className="input_modal"
          name="name"
          placeholder="Name"
          required
        />
        <br />
        <input
          type="text"
          className="input_modal"
          name="surname"
          placeholder="Surname"
          required
        />
        <br />
        <input
          type="text"
          className="input_modal"
          name="about"
          placeholder="About"
          required
        />
        <br />
        <input
          type="email"
          className="input_modal"
          name="mail"
          placeholder="Email"
          required
        />
        <br />
        <input
          type="text"
          className="input_modal"
          name="phone"
          placeholder="Phone"
          required
        />
        <br />
        <div className="modal_add2">
          <select class="select_gender" name="gender" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br />

          <button type="submit" className="modal_add_contact">
            Add new contact
          </button>
          <button onClick={() => setShow(false)}>Close</button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
