import styles from "@/app/home.module.css";

export default function Certification() {
    return(
        <>
            <div className={styles.skillsheader} data-aos="fade-up">
                <h3>Certification & Recommendations</h3>
            </div>
            <div className={styles.year} data-aos="fade-up">
                <a target="-blank" href="certificate-eustace-mbanefo.png">
                <figure>
                    <img src="certificate-eustace-mbanefo.png" alt="certificate" />
                </figure>
                </a>
                <h5>Software Engineering Certificate</h5>
            </div>
    <div className={styles.year} data-aos="fade-up">
                <a target="-blank" href="sync-interns-cert.png">
                <figure>
                    <img src="sync-interns-cert.png" alt="certificate" />
                </figure>
                </a>
                <h5>Web Developer Certificate</h5>
            </div>
    <div className={styles.year} data-aos="fade-up">
                <a target="-blank" href="recommendation.png">
                <figure>
                    <img src="recommendation.png" alt="recommendations" />
                </figure>
                </a>
                <h5>Recommend</h5>
            </div>
        </>
    )
}
