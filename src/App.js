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
import "animate.css";

function App() {
	// <===== ROUTING IMPLEMENTATION =====>
	const router = createBrowserRouter([
		{
			element: <Root />,
			errorElement: <ErrorPage />,
			children: [
				{
					path: "/",
					lazy: async () => ({
						Component: (await import("./page-components/homePage"))
							.default,
					}),
				},
				{
					path: "/team",
					lazy: async () => ({
						Component: (await import("./page-components/team"))
							.default,
					}),
				},
				{
					path: "/tokens",
					children: [
						{
							index: true,
							lazy: async () => ({
								Component: (
									await import("./page-components/tokens")
								).default,
							}),
						},
						{
							// path: "saved",
							// async lazy() {
							//   const SavedTokens = await import(
							//     "./common/block-components/block-savedTokens"
							//   );
							//   return { Component: SavedTokens.default };
							// },
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
					lazy: async () => ({
						Component: (await import("./page-components/register"))
							.default,
					}),
				},
				{
					path: "/login",
					lazy: async () => ({
						Component: (await import("./page-components/login"))
							.default,
					}),
				},
				{
					path: "/recover-password",
					lazy: async () => ({
						Component: (
							await import("./page-components/recoverPassword")
						).default,
					}),
				},
				{
					path: "/join-whitelist",
					lazy: async () => ({
						Component: (
							await import("./page-components/joinWhitelist")
						).default,
					}),
				},
				{
					path: "/profile",
					lazy: async () => ({
						Component: (await import("./page-components/profile"))
							.default,
					}),
				},
				{
					path: "/logging-out",
					lazy: async () => ({
						Component: (await import("./page-components/logOut"))
							.default,
					}),
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
