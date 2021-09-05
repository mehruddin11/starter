import React,{useContext, useState, useEffect} from 'react';
import MockFollowers from './mockdata/mockfollowers';
import Mockrepos from './mockdata/mockrepos';
import MockUsers from './mockdata/mockusers';
const AppContext = React.createContext();
const rootUrl = 'https://api.github.com';

const AppProvider = ({children}) => {
	const [followers, setFollowers] =useState(MockFollowers);
	const [Repo, setRepo] =useState(Mockrepos);
	const [Users, setUsers]= useState(MockUsers);
	return <AppContext.Provider
	 value= {
	 	{
	 		followers,
	 		Repo,
	 		Users
	 	}
	}>
	{children} 
	</AppContext.Provider>

};

const useGlobalContext = () =>{
	return useContext(AppContext);
}
export {
	useGlobalContext, 
	AppContext,
	AppProvider
};