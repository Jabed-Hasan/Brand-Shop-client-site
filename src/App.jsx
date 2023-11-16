import { useRef } from "react";
import emailjs from "@emailjs/browser";
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

      <div className="bg-state-100">
            <p className="text-4xl font-bold text-center mb-5">Send Your Openions</p>
        
    
    <form className="text-center flex flex-col items-center" ref={form} onSubmit={sendEmail}>
    <div className="form-control w-1/3 ml-4">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="name" required placeholder="Name" className="input input-bordered w-full" />
                </label>
            </div>
    <div className="form-control w-1/3 ml-4">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="email" placeholder="Email" required className="input input-bordered w-full" />
                </label>
            </div>
    <div className="form-control w-1/3 ml-4 ">
                <label className="label">
                    <span className="label-text">Massage</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="massage" placeholder="Write your Massage" className="pb-20 pt-3 input input-bordered w-full" />
                </label>
            </div>
            <input type="submit" value="Send" className="btn w-1/3 ml-4 mt-5 bg-slate-600 text-white " />
    </form>
 
      </div>
  );
};


export default Contact;
