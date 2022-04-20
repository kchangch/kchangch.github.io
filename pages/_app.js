import Layout from "../components/Layout";
import "../styles/globals.css";
import data from "../data.json";

function MyApp({ Component, pageProps, commonProps }) {
	return (
		<Layout info={commonProps.info}>
			<Component {...pageProps} />
		</Layout>
	);
}

MyApp.getInitialProps = async () => {
	const info = {
		logo: data.site.logoImage,
		user: data.profile.firstName,
		title: data.site.title,
	};
	return {
		commonProps: { info },
	};
};

export default MyApp;
