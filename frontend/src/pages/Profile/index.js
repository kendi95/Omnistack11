import React, { useEffect, useState } from "react";
import { FiPower, FiTrash2 } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/logo.svg";
import api from "../../services/api";
import "./styles.css";

export default function Profile() {
	const name = localStorage.getItem("ongName");
	const ong_id = localStorage.getItem("ongId");

	const [incidents, setIncidents] = useState([]);
	const history = useHistory();

	useEffect(() => {
		api
			.get("/profile", {
				headers: {
					Authorization: ong_id,
				},
			})
			.then(res => {
				setIncidents(res.data);
			});
	}, [ong_id]);

	async function handleDeleteIncidents(id) {
		try {
			await api.delete(`/incidents/${id}`, {
				headers: {
					Authorization: ong_id,
				},
			});
			setIncidents(incidents.filter(incident => incident.id !== id));
		} catch (err) {
			alert("Erro ao deletar caso, tente novamente.");
		}
	}

	const handleLogout = () => {
		localStorage.clear();
		history.push("/");
	};

	return (
		<div className='profile-container'>
			<header>
				<img src={logo} alt='Be The Hero' />
				<span>Bem vinda, {name}</span>

				<Link to='/incidents/new' className='button'>
					Cadastrar novo caso
				</Link>
				<button type='button' onClick={handleLogout}>
					<FiPower size={18} color='#e02041' />
				</button>
			</header>

			<h1>Casos cadastrados</h1>
			<ul>
				{incidents.map(incident => (
					<li key={incident.id}>
						<strong>CASO:</strong>
						<p>{incident.title}</p>

						<strong>DESCRIÇÃO:</strong>
						<p>{incident.description}</p>

						<strong>VALOR:</strong>
						<p>
							{Intl.NumberFormat("pt-BR", {
								style: "currency",
								currency: "BRL",
							}).format(incident.value)}
						</p>

						<button
							type='button'
							onClick={() => handleDeleteIncidents(incident.id)}
						>
							<FiTrash2 size={20} color='#a8a8b3' />
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
