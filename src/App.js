"use-client";

import { Fragment } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import RequireAuth from "./common/auth";
import Root from "./page-components/root";
import ErrorPage from "./page-components/errorPage";
import HomePage from "./page-components/homePage";
import Team from "./page-components/team";
import Tokens from "./page-components/tokens";
import JoinWhitelist from "./page-components/joinWhitelist";
import Register from "./page-components/register";
import Login from "./page-components/login";
import Profile from "./page-components/profile";
import RecoverPassword from "./page-components/recoverPassword";
import SavedTokens from "./common/block-components/block-savedTokens";
import TokenDetails from "./common/block-components/block-token-details";
import LogOut from "./page-components/logOut";
import NotFound from "./page-components/notFound";

function App() {
  // <===== ROUTING IMPLEMENTATION =====>
  const router = createBrowserRouter([
    {
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        { path: "/team", element: <Team /> },
        {
          path: "/tokens",
          children: [
            {
              index: true,
              element: <Tokens />,
            },
            {
              path: "saved",
              element: <SavedTokens />,
              children: [{ path: ":tokenId", element: <TokenDetails /> }],
            },
            { path: ":tokenId", element: <TokenDetails /> },
          ],
        },
        {
          path: "/join-whitelist",
          element: (
            <RequireAuth>
              <JoinWhitelist />
            </RequireAuth>
          ),
        },
        { path: "/register", element: <Register /> },
        { path: "/login", element: <Login /> },
        {
          path: "/profile",
          element: (
            <RequireAuth>
              <Profile />
            </RequireAuth>
          ),
        },
        {
          path: "/recover-password",
          element: <RecoverPassword />,
        },
        { path: "/logging-out", element: <LogOut /> },
        { path: "/not-found", element: <NotFound /> },
        { path: "*", element: <Navigate to="/not-found" /> },
      ],
    },
  ]);

  return (
    <Fragment>
      {/* // <===== ERROR BOUNDARY WITH FALLBACK MESSAGE =====> */}
      <ErrorBoundary fallback={<ErrorPage />}>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </Fragment>
  );
}

export default App;
