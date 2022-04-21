import React from 'react';
import { useNavigate } from 'react-router-dom';

function PublicOnlyRoute({ children }) {
	const accessToken = false;
	const loading = false;
	const navigate = useNavigate();

	if (!accessToken) {
		return children;
	} else if (loading) {
		return <div>Loading...</div>;
	} else if (accessToken && !loading) {
		navigate('/');
	} else {
		return <div>Something went wrong</div>;
	}
}
export default PublicOnlyRoute;
