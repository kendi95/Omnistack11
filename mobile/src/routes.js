import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Detail from "./pages/Detail";
import Incidents from "./pages/Incidents";

const Stack = createStackNavigator();

export default function Routes() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen component={Incidents} name='Casos' />
				<Stack.Screen component={Detail} name='Detalhes' />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
