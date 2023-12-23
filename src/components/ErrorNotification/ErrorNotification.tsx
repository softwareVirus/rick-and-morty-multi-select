import React, { memo } from "react";
import "./ErrorNotification.css";

interface Props {
  message: string;
}

const ErrorNotification: React.FC<Props> = memo(({ message }) => (
  <div className="error-notification">
    <p>{message}</p>
  </div>
));

export default ErrorNotification;
