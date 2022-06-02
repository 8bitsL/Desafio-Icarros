import React, { useState } from 'react';
import axios from 'axios';

import { Container, Texto, Formulario, Input, InputSubmit } from './style';

const Form = () => {
	const [data, setData] = useState();

	const enviForm = async (e) => {
		e.preventDefault();

		axios.post('https://webhook.site/9638fd86-0cc2-4685-a897-ab2146d0944b', data).then(res => { console.log(res.data) });
	}

	return (
		<Container>
			<Texto>Quem somos</Texto>
			<Formulario onSubmit={enviForm}>
				<Input
					type="text"
					placeholder="Integrante 1"
					onChange={e => setData({ ...data, Integrante1: e.target.value })}
				/>
				<Input
					type="text"
					placeholder="Integrante 2"
					onChange={e => setData({ ...data, Integrante2: e.target.value })}
				/>
				<Input
					type="text"
					placeholder="Integrante 3"
					onChange={e => setData({ ...data, Integrante3: e.target.value })}
				/>
				<Input
					type="text"
					placeholder="Nome do grupo"
					onChange={e => setData({ ...data, nomegrupo: e.target.value })}
				/>
				<InputSubmit type="submit" value="Enviar Dados" />
			</Formulario>
		</Container>
	)
};

export default Form;