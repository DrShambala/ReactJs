import React from "react";

export default function Alert(props) {
  
  function capitalize(word) {
    if (!word) return '';
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
  
  return (
    
      props.alertmsg && <div class={`alert alert-${props.alertmsg.type} alert-dismissible `} role="alert">
        <strong>{capitalize(props.alertmsg.type)}</strong> : {props.alertmsg.msg}
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    
  );
}