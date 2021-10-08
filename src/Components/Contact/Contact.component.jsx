import React from "react";
import "./Contact.scss";

const Contact = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={"contact-container"}>
      <div className={"contact-title"}>
        Contact <div className={"divider"}></div>
      </div>
      <div className={"contact-detail"}>
        <div className={"input-data"}>
          <input type={"text"} required />
          <label>Name</label>
        </div>
        <div className={"input-data"}>
          <input type={"text"} required />
          <label>Email Address</label>
        </div>
        <div className={"input-data"}>
          <input type={"text"} required />
          <label>Phone Number</label>
        </div>
        <div className={"input-data"}>
          <input type={"text"} required />
          <label>Message</label>
        </div>

        <button>Send</button>
      </div>
    </div>
  );
});

export default Contact;
