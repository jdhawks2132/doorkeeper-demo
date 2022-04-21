import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import PersistLogin from './components/sessions/PersistLogin';
import Logout from './components/sessions/Logout';
import PrivateRoute from './components/routes/PrivateRoute';
import PublicOnlyRoute from './components/routes/PublicOnlyRoute';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/sessions/Login';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<header className='App-headre'>
					<ResponsiveAppBar />
				</header>
				<main>
					<Routes>
						<Route element={<PersistLogin />}>
							<Route
								path='/'
								element={
									<PrivateRoute>
										<Dashboard />
									</PrivateRoute>
								}
							/>
							<Route
								path='/logout'
								element={
									<PrivateRoute>
										<Logout />
									</PrivateRoute>
								}
							/>
							<Route
								path='/login'
								element={
									<PublicOnlyRoute>
										<Login />
									</PublicOnlyRoute>
								}
							/>
						</Route>
					</Routes>
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
