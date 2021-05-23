import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Homepage from "./components/Home/Homepage";
import HotelsPage from "./components/Hotels/HotelsPage";
import HotelDetails from "./components/Hotels/HotelDetails";
import Contact from "./components/Contact/Contact";
import AdminPage from "./components/Admin/AdminPage";
import Footer from "./components/Footer/Footer";
import LoginPage from "./components/Admin/Login/LoginPage";
import HotelsCrud from "./components/Admin/components/HotelsCrud";
import NotFoundPage from "./components/404/NotFoundPage";

export default function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Homepage />
					</Route>
					<Route exact path='/hotels'>
						<HotelsPage />
					</Route>
					<Route exact path='/hotels/:id'>
						<HotelDetails />
					</Route>
					<Route path='/contact'>
						<Contact />
					</Route>
					<AuthProvider>
						<Route path='/login'>
							<LoginPage />
						</Route>
						<Route exact path='/admin'>
							<AdminPage />
						</Route>
						<Route exact path='/admin/crud'>
							<HotelsCrud />
						</Route>
					</AuthProvider>
					<Route path='*'>
						<NotFoundPage />
					</Route>
				</Switch>
			</Router>
			<Footer />
		</>
	);
}
