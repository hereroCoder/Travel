import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import "./styles/Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHouseChimney,
	faPlaneUp,
	faImage,
	faUserGroup,
	faEnvelope,
} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
	return (
		<nav className='nav'>
			<ul>
				<Link to='/'>
					<FontAwesomeIcon icon={faHouseChimney} size='sm' />
					&nbsp;Home
				</Link>
				<CustomLink to='/destinations'>
					<FontAwesomeIcon icon={faPlaneUp} size='sm' />
					&nbsp;Destinations
				</CustomLink>
				<CustomLink to='/Gallery'>
					<FontAwesomeIcon icon={faImage} size='sm' />
					&nbsp; Gallery
				</CustomLink>
				<CustomLink to='/about'>
					<FontAwesomeIcon icon={faUserGroup} size='sm' />
					&nbsp;About US
				</CustomLink>
				<CustomLink to='/contact'>
					<FontAwesomeIcon icon={faEnvelope} size='sm' />
					&nbsp;Contact US
				</CustomLink>
			</ul>
		</nav>
	)
}

function CustomLink({ to, children, ...props }) {
	const resolvedPath = useResolvedPath(to)
	const isActive = useMatch({ path: resolvedPath.pathname, end: true })

	return (
		<li className={isActive ? 'active' : ''}>
			<Link to={to} {...props}>
				{children}
			</Link>
		</li>
	)
}
