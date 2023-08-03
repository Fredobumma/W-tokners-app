"use-client";

import { Fragment, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Root from "./page-components/root";
import ErrorPage from "./page-components/errorPage";
import Loader from "./common/block-components/loader";
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
          async lazy() {
            const Home = await import("./page-components/homePage");
            return { Component: Home.default };
          },
        },
        {
          path: "/team",
          async lazy() {
            const Team = await import("./page-components/team");
            return { Component: Team.default };
          },
        },
        {
          path: "/tokens",
          children: [
            {
              index: true,
              async lazy() {
                const Tokens = await import("./page-components/tokens");
                return { Component: Tokens.default };
              },
            },
            {
              path: "saved",
              async lazy() {
                const SavedTokens = await import(
                  "./common/block-components/block-savedTokens"
                );
                return { Component: SavedTokens.default };
              },
              // children: [
              //   {
              //     path: ":tokenId",
              //     async lazy() {
              //       const TokenDetails = await import(
              //         "./common/block-components/block-token-details"
              //       );
              //       return { Component: TokenDetails.default };
              //     },
              //   },
              // ],
            },
            // {
            //   path: ":tokenId",
            //   async lazy() {
            //     const TokenDetails = await import(
            //       "./common/block-components/block-token-details"
            //     );
            //     return { Component: TokenDetails.default };
            //   },
            // },
          ],
        },
        {
          path: "/register",
          async lazy() {
            const Register = await import("./page-components/register");
            return { Component: Register.default };
          },
        },
        {
          path: "/login",
          async lazy() {
            const Login = await import("./page-components/login");
            return { Component: Login.default };
          },
        },
        {
          path: "/recover-password",
          async lazy() {
            const RecoverPassword = await import(
              "./page-components/recoverPassword"
            );
            return { Component: RecoverPassword.default };
          },
        },
        {
          path: "/join-whitelist",
          async lazy() {
            const JoinWhitelist = await import(
              "./page-components/joinWhitelist"
            );
            return {
              Component: JoinWhitelist.default,
            };
          },
        },
        {
          path: "/profile",
          async lazy() {
            const Profile = await import("./page-components/profile");
            return {
              Component: Profile.default,
            };
          },
        },
        {
          path: "/logging-out",
          async lazy() {
            const LogOut = await import("./page-components/logOut");
            return { Component: LogOut.default };
          },
        },
        { path: "/not-found", element: <NotFound /> },
        { path: "*", element: <Navigate to="/not-found" /> },
      ],
    },
  ]);

  return (
    <Fragment>
      {/* <===== ERROR BOUNDARY WITH FALLBACK MESSAGE =====> */}
      <ErrorBoundary fallback={<ErrorPage />}>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={router} />
        </Suspense>
      </ErrorBoundary>
    </Fragment>
  );
}

export default App;
