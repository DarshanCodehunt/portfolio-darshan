import React, { useState } from "react";
import "./Contact.scss";
import { API, graphqlOperation } from "aws-amplify";
import { createUserContact } from "../../graphql/mutations";
import toast, { Toaster } from "react-hot-toast";

const Contact = React.forwardRef((props, ref) => {
  const [contactObj, setContactObj] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const temp = { ...contactObj };
    temp[e.target.id] = e.target.value;
    setContactObj(temp);
  };

  const sendData = (e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log(contactObj);

    createUser(contactObj);
  };

  const createUser = async (contactObj) => {
    try {
      let response = await API.graphql(
        graphqlOperation(createUserContact, { input: contactObj })
      );

      if (response) {
        toast.success(
          "Thank you for Contacting!!.Will get back to you Shortly.",
          { duration: 4000 }
        );

        const resetObject = {
          name: "",
          phone: "",
          email: "",
          message: "",
        };

        setContactObj(resetObject);
      }
    } catch (err) {
      toast.error("Something went wrong.Try after sometime", {
        duration: 4000,
      });
    }
  };

  return (
    <div ref={ref} className={"contact-container"}>
      <Toaster position="bottom-center" />
      <div className={"contact-title"}>
        Contact <div className={"divider"}></div>
      </div>
      <form onSubmit={sendData} className={"contact-detail"}>
        <div className={"input-data"}>
          <input
            value={contactObj.name}
            required
            id={"name"}
            onChange={handleChange}
            type={"text"}
          />
          <label>Name</label>
        </div>
        <div className={"input-data"}>
          <input
            value={contactObj.email}
            id={"email"}
            onChange={handleChange}
            type={"email"}
          />
          <label>Email Address</label>
        </div>
        <div className={"input-data"}>
          <input
            value={contactObj.phone}
            type="number"
            id={"phone"}
            onChange={handleChange}
            required
            maxLength={15}
          />
          <label>Phone Number</label>
        </div>
        <div className={"input-data"}>
          <input
            value={contactObj.message}
            id={"message"}
            onChange={handleChange}
            type={"text"}
          />
          <label>Message</label>
        </div>

        <button>Send</button>
      </form>
    </div>
  );
});

export default Contact;
