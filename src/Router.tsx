import React, { lazy } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./history"
import MenuAppBar from "./components/layouts/AppBar";

const LoginPage = lazy(() => import("./pages/auth/LoginPage"))


class AppRouter extends React.Component {
	render() {
		return <Router history={history}>
			<Switch>
				<Route path="/" exact>
					<LoginPage/>
				</Route>
				<Route path="/exams">
				</Route>
				<Route path="/exams/:id/evaluate">
				</Route>
			</Switch>
		</Router>;
	}
}

export default AppRouter;