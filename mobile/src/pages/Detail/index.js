import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as MailComposer from "expo-mail-composer";
import React from "react";
import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
import logo from "../../assets/logo.png";
import Intl from "../../utils/Intl";
import styles from "./styles";

export default function Detail() {
	const navigation = useNavigation();
	const route = useRoute();
	const incident = route.params.incident;
	const message = `Olá ${
		incident.name
	}, estou entrando em contato pois gostaria de ajudar no caso "${
		incident.title
	}" com o valor de ${Intl(incident.value)} `;

	const navigationToIncidents = () => {
		navigation.goBack();
	};

	const sendEmail = () => {
		MailComposer.composeAsync({
			subject: `Herói do cado: ${incident.title}`,
			recipients: [`${incident.email}`],
			body: message,
		});
	};

	const sendWhatApp = () => {
		Linking.openURL(
			`whatsapp://send?phone=55${incident.whatsapp}&text=${message}`
		);
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image source={logo} />

				<TouchableOpacity onPress={navigationToIncidents}>
					<Feather name='arrow-left' size={24} color='#E02041' />
				</TouchableOpacity>
			</View>

			<View style={styles.incident}>
				<Text style={styles.incidentProperty}>ONG:</Text>
				<Text style={styles.incidentValue}>
					{incident.name} de {incident.city}/{incident.uf}
				</Text>

				<Text style={styles.incidentProperty}>CASO:</Text>
				<Text style={styles.incidentValue}>{incident.title}</Text>

				<Text style={styles.incidentProperty}>VALOR:</Text>
				<Text style={styles.incidentValue}>{Intl(incident.value)}</Text>
			</View>

			<View style={styles.contactBox}>
				<Text style={styles.heroTitle}>Salve o dia!</Text>
				<Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

				<Text style={styles.heroDescription}>Entre em contato:</Text>

				<View style={styles.actions}>
					<TouchableOpacity style={styles.action} onPress={sendWhatApp}>
						<Text style={styles.actionText}>WhatsApp</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.action} onPress={sendEmail}>
						<Text style={styles.actionText}>E-mail</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
