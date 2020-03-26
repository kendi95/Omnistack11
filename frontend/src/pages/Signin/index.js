import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/logo.svg";
import api from "../../services/api";
import "./styles.css";

export default function Signin() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [whatsapp, setWhatsapp] = useState("");
	const [city, setCity] = useState("");
	const [uf, setUf] = useState("");

	const history = useHistory();

	async function handleSignin(e) {
		e.preventDefault();
		try {
			const res = await api.post("/ongs", {
				name,
				email,
				whatsapp,
				city,
				uf,
			});
			const { id } = res.data;
			alert(`Seu ID: ${id}`);
			history.push("/");
		} catch (err) {
			alert("Erro no cadastro, tente novamente.");
		}
	}

	return (
		<div className='signin-container'>
			<div className='content'>
				<section>
					<img src={logo} alt='Be The Hero' />
					<h1>Cadastro</h1>
					<p>
						Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
						os casos da sua ONG.
					</p>

					<Link className='back-link' to='/'>
						<FiArrowLeft size={16} color='#e02041' />
						Não tenho cadastro
					</Link>
				</section>
				<form onSubmit={handleSignin}>
					<input
						placeholder='Nome da ONG'
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<input
						placeholder='E-mail'
						type='email'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<input
						placeholder='WhatsApp'
						value={whatsapp}
						onChange={e => setWhatsapp(e.target.value)}
					/>
					<div className='input-group'>
						<input
							placeholder='Cidade'
							value={city}
							onChange={e => setCity(e.target.value)}
						/>
						<input
							placeholder='UF'
							style={{ width: 80 }}
							value={uf}
							onChange={e => setUf(e.target.value)}
						/>
					</div>
					<button className='button' type='submit'>
						Cadastrar
					</button>
				</form>
			</div>
		</div>
	);
}
