import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import PersistLogin from './components/sessions/PersistLogin';
import PrivateRoute from './components/routes/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';

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
						</Route>
					</Routes>
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
