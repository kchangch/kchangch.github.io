import data from "../data.json";
import Head from "next/head";
import styles from "../styles/Detail.module.css";
import moment from "moment";

export const getStaticPaths = async () => {
	const { features } = data.data;
	const paths = features.map((item) => {
		return {
			params: { id: item.id.toString() },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = data.data.features.filter((item) => item.id === id)[0].properties;
	return {
		props: { location: res },
	};
};

const Details = ({ location }) => {
	return (
		<>
			<Head>
				<title>Assessment | Detail View </title>
			</Head>
			<div className={styles.container}>
				<div className={styles.gridContainer}>
					<div className={styles.title}>
						<h3>{location.place}</h3>
					</div>
					<div className={styles.header}>Title</div>
					<div className={styles.text}>{location.place}</div>
					<div className={styles.header}>Magnitude</div>
					<div className={styles.text}>{location.mag}</div>
					<div className={styles.header}>Time</div>
					<div className={styles.text}>
						{moment(new Date(location.time)).format("lll")}
					</div>
					<div className={styles.header}>Status</div>
					<div className={styles.text}>{location.status}</div>
					<div className={styles.header}>Tsunami</div>
					<div className={styles.text}>{location.tsunami}</div>
					<div className={styles.header}>Type</div>
					<div className={styles.text}>{location.type}</div>
				</div>
			</div>
		</>
	);
};

export default Details;
