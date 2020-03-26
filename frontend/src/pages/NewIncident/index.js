import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/logo.svg";
import api from "../../services/api";
import "./styles.css";

export default function NewIncident() {
	const id = localStorage.getItem("ongId");
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [value, setValue] = useState(0);
	const history = useHistory();

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			await api.post(
				"/incidents",
				{
					title,
					description,
					value,
				},
				{
					headers: {
						Authorization: id,
					},
				}
			);
			history.push("/profile");
		} catch (err) {
			alert("Erro ao cadastrar caso, tente novamente.");
		}
	};

	return (
		<div className='incident-container'>
			<div className='content'>
				<section>
					<img src={logo} alt='Be The Hero' />
					<h1>Cadastrar novo caso</h1>
					<p>
						Descreva o caso detalhamente para encontrar um herói para resolver
						isso.
					</p>

					<Link className='back-link' to='/profile'>
						<FiArrowLeft size={16} color='#e02041' />
						Voltar para home
					</Link>
				</section>
				<form onSubmit={handleSubmit}>
					<input
						placeholder='Título do caso'
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
					<textarea
						placeholder='Descrição'
						value={description}
						onChange={e => setDescription(e.target.value)}
					/>
					<input
						type='number'
						placeholder='Valor em reais'
						value={value}
						onChange={e => setValue(e.target.value)}
					/>
					<button className='button' type='submit'>
						Cadastrar
					</button>
				</form>
			</div>
		</div>
	);
}
