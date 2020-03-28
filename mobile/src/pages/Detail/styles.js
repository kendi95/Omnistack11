import Constants from "expo-constants";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 24,
		paddingTop: Constants.statusBarHeight + 20,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},

	incident: {
		padding: 20,
		paddingBottom: 15,
		borderRadius: 8,
		backgroundColor: "#FFF",
		marginTop: 48,
	},
	incidentProperty: {
		fontSize: 14,
		color: "#41414d",
		fontWeight: "bold",
	},
	incidentValue: {
		marginTop: 3,
		fontSize: 15,
		marginBottom: 12,
		color: "#737380",
	},

	contactBox: {
		padding: 20,
		borderRadius: 8,
		backgroundColor: "#FFF",
		marginTop: 12,
	},
	heroTitle: {
		fontWeight: "bold",
		fontSize: 20,
		color: "#13131a",
		lineHeight: 30,
	},
	heroDescription: {
		fontSize: 15,
		color: "#737380",
		marginTop: 16,
	},
	actions: {
		marginTop: 16,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	action: {
		backgroundColor: "#E02041",
		borderRadius: 8,
		height: 50,
		width: "48%",
		alignItems: "center",
		justifyContent: "center",
	},
	actionText: {
		color: "#FFF",
		fontWeight: "bold",
	},
});
