import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eze3ln4",
        "template_axrnu86",
        form.current,
        "KBSCHkU2-xeYxpqIW"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          Swal.fire({
            title: "Good job!",
            text: "Message Sent Successfully",
            icon: "success"
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (

      <div>
            <h1 className="text-4xl font-bold text-center">Send Your Openions</h1>
         <StyledContactForm>
    
    <form ref={form} onSubmit={sendEmail}>
      <label className="left-align">Name</label>
      <input type="text" name="user_name" />
      <label className="left-align">Email</label>
      <input required type="email" name="user_email" />
      <label className="left-align">Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  </StyledContactForm>
      </div>
  );
};

const StyledContactForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw; /* Use 100vw to cover the entire width of the viewport */

  form {
    width: 400px;
    font-size: 16px;
    text-align: center;

    input,
    textarea {
      width: 100%;
      padding: 7px;
      margin-bottom: 15px;
      box-sizing: border-box;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label.left-align {
      text-align: left;
      margin-top: 1rem;
      display: block;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;

export default Contact;
