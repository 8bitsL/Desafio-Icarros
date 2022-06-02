import React, {useState} from 'react';
import axios from 'axios';

const Form = () => {
	const [data, setData] = useState();

	const enviForm = async (e) => {
		e.preventDefault();

		axios.post('https://webhook.site/9638fd86-0cc2-4685-a897-ab2146d0944b', data).then(res => {console.log(res.data)});
	}

	return (
		<form onSubmit={enviForm}>
			<input
				type="text"
				placeholder="Nome 1"
				onChange={e => setData({ ...data, nome1: e.target.value })}
			/>
			<input
				type="text"
				placeholder="Nome 2"
				onChange={e => setData({ ...data, nome2: e.target.value })}
			/>
			<input
				type="text"
				placeholder="Nome 3"
				onChange={e => setData({ ...data, nome3: e.target.value })}
			/>
			<input
				type="text"
				placeholder="Nome do grupo"
				onChange={e => setData({ ...data, nomegrupo: e.target.value })}
			/>
			<input type="submit" value="Enviar Dados" />
		</form>
	)
};

export default Form;