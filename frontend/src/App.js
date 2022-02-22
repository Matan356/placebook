import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";
import LoadingSpinner from "./shared/components/UIElements/LoadingSpinner";

const Users = React.lazy(() => import("./user/pages/Users"));
const NewPlace = React.lazy(() => import("./places/pages/NewPlace"));
const UserPlaces = React.lazy(() => import("./places/pages/UserPlaces"));
const UpdatePlace = React.lazy(() => import("./places/pages/UpdatePlace.js"));
const Auth = React.lazy(() => import("./user/pages/Auth"));

const App = () => {
  const { token, login, logout, userId } = useAuth();

  let routes;

  if (token) {
    routes = (
      <>
        <Route path="/" element={<Users />} end></Route>
        <Route path="/:userId/places" element={<UserPlaces />} end></Route>
        <Route path="/places/new" element={<NewPlace />} end></Route>
        <Route path="/places/:placeId" element={<UpdatePlace />}></Route>
      </>
    );
  } else {
    routes = (
      <>
        <Route path="/" element={<Users />} end></Route>
        <Route path="/:userId/places" element={<UserPlaces />} end></Route>
        <Route path="/auth" element={<Auth  />} ></Route>
      </>
    );
  }

  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          userId: userId,
          login: login,
          logout: logout,
        }}
      >
        <MainNavigation />
        <main>
          {" "}
          <Suspense
            fallback={
              <div className="center">
                <LoadingSpinner />
              </div>
            }
          >
            <Routes>{routes}</Routes>
          </Suspense>
        </main>
      </AuthContext.Provider>
    </>
  );
};

export default App;
