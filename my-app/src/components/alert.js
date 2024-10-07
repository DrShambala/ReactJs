import React from "react";

export default function Alert(props) {
  return (
    <>
      <div class="alert alert-success alert-dismissible" role="alert">
        {props.alertmsg}
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
}
