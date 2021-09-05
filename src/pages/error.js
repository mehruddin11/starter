import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';

const Errorpage = () => {
	return (
		<Wrapper>
		<div>
		<h1> 404 </h1>
		<h3> sorry the page you tried cannot found </h3>
		<Link to ='/'>
		<button className ='btn'> backHome </button>
		</Link>
		</div>
		</Wrapper>

		)
}
const Wrapper= styled.section`
 min-height:100vh;
 display:grid;
 place-items:center;
 background:var(--clr-primary-10);
 text-align:center;
 h1{
 	font-size:10rem;
 }
 h3{
 	color:var(--clr-grey-3);
 	margin-bottom:1.5rem;
 }
`;

export default Errorpage;