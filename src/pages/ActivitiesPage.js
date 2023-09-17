'use client';
import styles from '../../styles/activities.module.css';

const Activities = () => {
	return (
		<div className={styles.activities}>
			<b className={styles.trendingThemes}>Trending Themes</b>
			<b className={styles.seeAll}>See all</b>
			<div className={styles.socialIns}>
				<div className={styles.socialInsChild} />
				<div className={styles.groupParent}>
					<div className={styles.ellipseParent}>
						<div className={styles.groupChild} />
						<b className={styles.b}>13</b>
					</div>
					<div className={styles.socialInsuranceTestParent}>
						<b className={styles.socialInsuranceTest}>Social Insurance Test</b>
						<b className={styles.schoolHallUniversity}>
							School Hall, University Road, Lagos State
						</b>
						<div className={styles.thJuly2021Parent}>
							<b className={styles.th10th}>13th July 2021</b>
							<b className={styles.am9}>{`8 A.M - 9 A.M `}</b>
							<div className={styles.groupItem} />
						</div>
					</div>
				</div>
			</div>
			<div className={styles.advMaths}>
				<div className={styles.advMathsChild} />
				<img
					className={styles.iconChevronLeft}
					alt=""
					src="/icon--chevron-left.svg"
				/>
				<div className={styles.groupContainer}>
					<div className={styles.ellipseParent}>
						<div className={styles.groupInner} />
						<b className={styles.b}>18</b>
					</div>
					<div className={styles.advMathsAssignmentDueParent}>
						<b className={styles.socialInsuranceTest}>
							Adv. Maths Assignment Due
						</b>
						<b className={styles.schoolHallUniversity}>
							**To be submitted via Email
						</b>
						<div className={styles.thJuly2021Parent}>
							<b className={styles.th10th}>17th September 2023</b>
							<b className={styles.am9}>{` 9:30 AM `}</b>
							<div className={styles.groupItem} />
						</div>
					</div>
				</div>
			</div>
			<div className={styles.drDipo}>
				<div className={styles.drDipoChild} />
				<img
					className={styles.iconChevronLeft}
					alt=""
					src="/icon--chevron-left.svg"
				/>
				<div className={styles.groupDiv}>
					<div className={styles.ellipseParent}>
						<div className={styles.groupChild1} />
						<b className={styles.b}>23</b>
					</div>
					<div className={styles.drDiposTutorialClassParent}>
						<b className={styles.socialInsuranceTest}>
							Dr. Dipo’s Tutorial Class
						</b>
						<b className={styles.schoolHallUniversity}>
							Edulog Tutorial College, Blk 56, Lagos State.
						</b>
						<div className={styles.rdJuly2021Parent}>
							<b className={styles.th10th}>23rd July 2021</b>
							<b className={styles.am9}>{`10 A.M - 1 P.M `}</b>
							<div className={styles.groupItem} />
						</div>
					</div>
				</div>
			</div>
			<div className={styles.lifeCon}>
				<div className={styles.lifeConChild} />
				<img
					className={styles.iconChevronLeft}
					alt=""
					src="/icon--chevron-left.svg"
				/>
				<div className={styles.groupParent1}>
					<div className={styles.ellipseParent}>
						<div className={styles.groupChild3} />
						<b className={styles.b3}>8</b>
					</div>
					<div className={styles.drDiposTutorialClassParent}>
						<b className={styles.socialInsuranceTest}>
							Life Contingency Tutorials
						</b>
						<b className={styles.schoolHallUniversity}>
							Edulog Tutorial College, Blk 56, Lagos State.
						</b>
						<div className={styles.th10thJuly2021Parent}>
							<b className={styles.th10th}>8th - 10th July 2021</b>
							<b className={styles.am92}>{`8 A.M - 9 A.M `}</b>
							<div className={styles.groupChild4} />
						</div>
					</div>
				</div>
			</div>
			<div className={styles.scroll}>
				<div className={styles.scrollChild} />
				<div className={styles.scrollItem} />
			</div>
		</div>
	);
};

export default Activities;
