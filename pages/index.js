import Head from "next/head";
import styles from "../styles/Home.module.css";
import data from "../data.json";
import Table from "../components/Table";

export const getStaticProps = async () => {
	const dataTitle = data.data.metadata.title;
	const locations = [];
	data.data.features.forEach((item) => {
		locations.push({
			id: item.id,
			title: item.properties.title,
			magnitude: item.properties.mag,
			time: item.properties.time,
		});
	});
	return {
		props: { title: dataTitle, locations: locations },
	};
};

export default function Home({ title, locations }) {
	const tableHeader = Object.keys(locations[0]).filter((item) => item !== "id");

	return (
		<>
			<Head>
				<title>Assessment | Home</title>
			</Head>
			<div className="content">
				<h3 className={styles.title}>{title}</h3>
				<Table tableHeader={tableHeader} locations={locations} />
			</div>
		</>
	);
}
