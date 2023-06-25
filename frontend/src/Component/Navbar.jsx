import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Navbar.css';
//import mainLogo from '../icons/main logo.png'
import { Heading } from '@chakra-ui/react';
const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<nav className="navbar">
			<Link to="/" className="nav-logo">
				<Heading style={{
					fontSize: '24px',
					fontWeight: 'bold',
					color: '#ebe5e1',
					textTransform: 'uppercase',
					fontFamily: 'Arial, sans-serif',
					letterSpacing: '2px',
					textShadow: '2px 2px 4px rgba(57, 43, 66, 0.3)',
					margin: '0',
					padding: '10px',
					//backgroundColor: '#f8f8f8',
					borderRadius: '8px',
					//boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
					//border: '1px solid #ccc',
				}}
				>𝒮𝒪𝒰𝑅𝒜𝒱 𝒮𝒜𝑅𝒦𝒜𝑅</Heading>
			</Link>
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<Link to={'/'}>
					<li className="nav-item">
						<Link to={'/'} className="nav-link" onClick={closeMenu}>
							Home
						</Link>
					</li>
				</Link>
				<Link to={'/about'}>
					<li className="nav-item">
						<Link to="/about" className="nav-link" onClick={closeMenu}>
							About
						</Link>
					</li>
				</Link>
				<Link to={'/skills'}>
					<li className="nav-item">
						<Link to="/skills" className="nav-link" onClick={closeMenu}>
							Skills
						</Link>
					</li>
				</Link>
				<Link to={'/contact'}>
					<li className="nav-item">
						<Link to="/contact" className="nav-link" onClick={closeMenu}>
							Contact
						</Link>
					</li>
				</Link>
				<Link to={'/projects'}>
					<li className="nav-item">
						<Link to="/projects" className="nav-link" onClick={closeMenu}>
							Projects
						</Link>
					</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
