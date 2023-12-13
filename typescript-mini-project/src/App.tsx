/**
 * This is the App component in TypeScript.
 * It imports necessary modules and components, sets up routing, and renders the header, pages, and footer.
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Import styles
import './App.scss';

//Import Pages and Components
import Home from './pages/home';
import Header from './components/header/Header';
import PostsPage from './pages/posts';
import Footer from './components/footer/Footer';


const App: React.FC = () => (
	<BrowserRouter>
    <Header />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/posts" element={<PostsPage />} />
		</Routes>
    <Footer /> 
	</BrowserRouter>
);

export default App;
