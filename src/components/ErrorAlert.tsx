import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
import { Alert } from "react-bootstrap";

type ErrorAlertProps = {
  message: ReactNode;
};
const ErrorAlert = ({ message }: ErrorAlertProps) => (
  <Alert variant="danger">
    <FontAwesomeIcon
      icon={faTriangleExclamation}
      beat
      size="sm"
      style={{ color: "#FF1919", marginRight: "5px" }}
    />
    <span className="error-message">{message}</span>
  </Alert>
);
export default ErrorAlert;
