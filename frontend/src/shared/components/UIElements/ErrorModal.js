import React from "react";

import Modal from "./Modal";
import Button from "../FormElements/Button";

const specificError = "Could not find places for the provided user id.";

const ErrorModal = (props) => {
    if (props.error === specificError ) {
      return (
        <Modal
        onCancel={props.onClear}
        header="An Error Occurred!"
        show={!!props.error}
        footer={
          <Button to="/" onClick={props.onClear}>
            Okay
          </Button>
        }
      >
        <p>{props.error}</p>
      </Modal>
      );
    } else {
      return    <Modal
      onCancel={props.onClear}
      header="An Error Occurred!"
      show={!!props.error}
      footer={
        <Button onClick={props.onClear}>
          Okay
        </Button>
      }
    >
      <p>{props.error}</p>
    </Modal>;
  };
};

export const massageModal = (props)=>{
  return (
    <Modal
    onCancel={props.onClear}
    header={props.header}
    show={props.massage}
    footer={
      <Button  onClick={props.onClear}>
        Okay
      </Button>
    }
  >
    <p>{props.error}</p>
  </Modal>
  );
}

export default ErrorModal;
