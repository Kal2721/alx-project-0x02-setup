import Link from 'next/link';

const Header: React.FC = () => {
	return (
		<header>
			<div>
				<h3><Link href="/">Contents</Link></h3>

				<nav>
					<ul>
					<li><Link href="/home">Home</Link></li>
					<li><Link href="/about">About</Link></li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
