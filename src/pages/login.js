import styled from 'styled-components';
import loginImg from '../images/login-img.svg';
import {Link } from 'react-router-dom';
import {useGlobalContext} from '../context/context'
const Login = () => {
	const {loading}= useGlobalContext();
	return (
		<Wrapper>
		<div className='container'>
		<h1> Github-Users</h1>
		<img src={loginImg} alt ={loginImg}/>
		<Link to ='/'>
		<button className='btn'>Login/sinup </button>
		</Link>
		</div>
		</Wrapper>

		)
}
const Wrapper = styled.section`
min-height:100vh;
display:grid;
place-items:center;
.container{
	width:90vw;
	max-width:600px;
	text-align:center;

	}
	img{
		margin-bottom:2rem;

	}
	h1{
		margin-bottom:1.5rem;
	}
`;
export default Login;