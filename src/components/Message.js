import React from "react";
import { Alert } from "react-bootstrap";

function Message({ variant, children }) {
  return <alert className="alert alert-danger">{children}</alert>;
}

Message.defaultProps = {
  variant: "error",
};
export default Message;
