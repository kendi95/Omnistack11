import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import heroes from "../../assets/heroes.png";
import logo from "../../assets/logo.svg";
import api from "../../services/api";
import "./styles.css";

export default function Logon() {
	const [id, setId] = useState("");
	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			const res = await api.post("/sessions", { id });
			const { name } = res.data;
			localStorage.setItem("ongId", id);
			localStorage.setItem("ongName", name);
			history.push("/profile");
		} catch (err) {
			alert("Falha no login, tente novamente.");
		}
	}

	return (
		<div className='logon-container'>
			<section className='form'>
				<img src={logo} alt='Be The Hero' />

				<form onSubmit={handleSubmit}>
					<h1>Faça seu logon</h1>
					<input
						placeholder='Sua ID'
						value={id}
						onChange={e => setId(e.target.value)}
					/>
					<button className='button' type='submit'>
						Entrar
					</button>
					<Link className='back-link' to='/signin'>
						<FiLogIn size={16} color='#e02041' />
						Não tenho cadastro
					</Link>
				</form>
			</section>

			<img src={heroes} alt='Be The Hero' />
		</div>
	);
}
