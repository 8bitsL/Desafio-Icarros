import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Texto = styled.h1`
	color: blue;
`

export const Formulario = styled.form`
	display: flex;
	flex-direction: column;
	padding: 10px;
`

export const Input = styled.input`
	padding: 10px;
	margin-bottom: 15px;
`

export const InputSubmit = styled.input`
	padding: 10px;
	&:hover{
		cursor: pointer;
		background: blue;
		color: white;
		padding: 15px;
	}
`