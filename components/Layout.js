import Navbar from "./Navbar";

const Layout = ({ children, info }) => {
	return (
		<div>
			<Navbar info={info} />
			{children}
		</div>
	);
};

export default Layout;
