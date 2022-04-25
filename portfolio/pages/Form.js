import React from "react";

{/* 
******insert axios
connect with backend*******/ }

function Form() {
  return (
    <div className="form-wrap">
      <div className="form-container">
        <form>
          <div className="form-container-inner-wrap">
            <h1 className="logotype">neetnet.io </h1>
            <br></br>
            <div className="input-wrap">
              <label className="label">NAME</label>
              <input
                className="input"
                label="Name"
                type="text"
                placeholder="Name"
                onChange={(e) => handle(e)}
                id="Name"
              />
              <div className="input-wrap">
                <label className="label">EMAIL</label>
                <input
                  className="input"
                  label="Email"
                  type="text"
                  placeholder="Email"
                  onChange={(e) => handle(e)}
                  id="Email"
                />
                <div className="input-wrap">
                  <label className="label">MESSAGE</label>
                  <textarea
                    className="textarea"
                    label="Message"
                    type="text"
                    placeholder="Write your message here"
                    onChange={(e) => handle(e)}
                    id="Message"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
        <button className="submit-button" type="button" onClick={""}>
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default Form;
