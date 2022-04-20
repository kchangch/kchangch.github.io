import styles from "../styles/Profile.module.css";
import data from "../data.json";
import Head from "next/head";

export const getStaticProps = async () => {
	const userInfo = data.profile;
	const userImage = data.profile.avatarImage;
	return {
		props: { userInfo: userInfo, userImage: userImage },
	};
};

const Profile = ({ userInfo, userImage }) => {
	return (
		<>
			<Head>
				<title>Assessment | Profile</title>
			</Head>
			<div className="content">
				<h3 className={styles.title}>Profile</h3>
			</div>
			<div className={styles.container}>
				<img src={userImage} height={200} width={200} />
				<div className={styles.gridContainer}>
					<div className={styles.header}>First name</div>
					<div className={styles.text}>{userInfo.firstName}</div>
					<div className={styles.header}>Last name</div>
					<div className={styles.text}>{userInfo.lastName}</div>
					<div className={styles.header}>Phone</div>
					<div className={styles.text}>{userInfo.phone}</div>
					<div className={styles.header}>Email</div>
					<div className={styles.text}>{userInfo.email}</div>
					<div className={styles.header}>Bio</div>
					<div className={styles.text}>{userInfo.bio}</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
