import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Logon from "./pages/Logon";
import NewIncident from "./pages/NewIncident";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Logon} />
				<Route path='/signin' exact component={Signin} />

				<Route path='/profile' exact component={Profile} />
				<Route path='/incidents/new' exact component={NewIncident} />
			</Switch>
		</BrowserRouter>
	);
}
