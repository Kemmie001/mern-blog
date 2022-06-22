import '../index.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import SignUp from '../pages/Signup'
import SignIn from '../pages/SignIn'
import { useState } from "react";
function Nav() {
	const [isNavExpanded, setisNavExpanded] = useState(false)
	return (
		<div>
			<BrowserRouter>
				<div className="nav">
					<div className="logo">
						<Link to="/">Logo</Link>
						<div onClick={() => {
							setisNavExpanded(!isNavExpanded);
						}} className="burger">&#9776;
					</div>
					</div>
					<div onClick={() => {
						setisNavExpanded(false);
					}} className={
						isNavExpanded ? "overlay expanded" : "overlay"
					}>
						<ul>
							<li className="">
								<Link to='/'>Home</Link>
							</li>
							<li className="">
								<Link to='/SignIn'>SignIn</Link>
							</li>
							<li className="">
								<Link to='/SignUp'>SignUp</Link>
							</li>
							<li className="">
								<a href="" className="">Pricing</a>
							</li>
							<li className="">
								<a href="" className="">Contact</a>
							</li>
						</ul>
					</div>
				</div>

				<Routes>

					<Route exact path='/' element={<Home />} />
					<Route path='/SignUp' element={<SignUp />} />
					<Route path='/SignIn' element={<SignIn />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default Nav
