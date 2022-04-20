import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = ({ info }) => {
	return (
		<nav>
			<div className="logo">
				<Link href="/">
					<img className={styles.logo} src={info.logo} alt="Realtor Logo" />
				</Link>
			</div>
			<h1>{info.title}</h1>
			<Link href="/profile">
				<a>Welcome {info.user}</a>
			</Link>
		</nav>
	);
};

export default Navbar;
