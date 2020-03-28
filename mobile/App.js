import "intl";
import "intl/locale-data/jsonp/pt-BR";
import React from "react";
import { Text, View } from "react-native";
import Routes from "./src/routes";

export default function App() {
	return (
		<Routes>
			<View>
				<Text>Open up App.js to start working on your app!</Text>
			</View>
		</Routes>
	);
}
