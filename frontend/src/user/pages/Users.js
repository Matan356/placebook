import React, { useEffect, useState } from "react";

import UsersList from "../components/UsersList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";
import Modal from "../../shared/components/UIElements/Modal";
import Button from "../../shared/components/FormElements/Button";

const Users = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState();
  const [initialMessage, setInitialMessage] = useState();
  const [addPlaceMassage, setAddPlaceMassage] = useState();
  const [seePlacesMassage, setSeePlacesMassage] = useState();

  let initialMessageStorage = localStorage.getItem("InitialMessage");
  let addPlaceMassageStorage = localStorage.getItem("addPlaceMassage");
  let seePlacesMassageStorage = localStorage.getItem("seePlacesMassage");

  const closeMassage = () => {
    localStorage.setItem("InitialMessage", initialMessage);
    setInitialMessage(false);
    setAddPlaceMassage(false);
    setSeePlacesMassage(false);
  };

  if (initialMessageStorage == null) {
    setTimeout(() => {
      setInitialMessage(true);
    }, 3000);
  }

  if (addPlaceMassageStorage !== null) {
    setTimeout(() => {
      setAddPlaceMassage(true);
      localStorage.removeItem("addPlaceMassage");
    }, 3000);
  }

  if (seePlacesMassageStorage !== null) {
    setTimeout(() => {
      setSeePlacesMassage(true);
      localStorage.removeItem("seePlacesMassage");
    }, 3000);
  }

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/users`
        );

        setLoadedUsers(responseData.users);
      } catch (err) {}
    };
    fetchUsers();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedUsers && <UsersList items={loadedUsers} />}
      <>
        <Modal
          show={initialMessage}
          onCancel={closeMassage}
          header="Welcome to placebook!"
          footerClass="place-item__modal-actions"
          footer={
            <React.Fragment>
              <Button inverse onClick={closeMassage}>
              OKAY
              </Button>
            </React.Fragment>
          }
        >
          <p>
            The <b>"placebook"</b> platform is designed to share beautiful and
            interesting places with the rest of our users and see the location
            of that place on a Google map.
            <br /> To upload a place you will first need to <b>sign in</b>.
          </p>
        </Modal>
      </>
      <>
        <Modal
          show={addPlaceMassage}
          onCancel={closeMassage}
          header="Ready to upload place?"
          footerClass="place-item__modal-actions"
          footer={
            <React.Fragment>
              <Button inverse onClick={closeMassage}>
              OKAY
              </Button>
            </React.Fragment>
          }
        >
          <p>
            Once that you have <b>registered</b>, you can upload a place and
            share it with the other users, click <b>"Add place"</b> please.
          </p>
        </Modal>
      </>
      <>
        <Modal
          show={seePlacesMassage}
          onCancel={closeMassage}
          header="See your places!"
          footerClass="place-item__modal-actions"
          footer={
            <React.Fragment>
              <Button inverse onClick={closeMassage}>
                OKAY
              </Button>
            </React.Fragment>
          }
        >
          <p>
            Excellent, you have uploaded a place!
            <br /> you can see the places you have uploaded by clicking on your
            user card or in the <b> "My places"</b>
            tab.
          </p>
        </Modal>
      </>
    </React.Fragment>
  );
};

export default Users;
