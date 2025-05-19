import styles from "@/app/home.module.css";

export default function Education() {
    return(
        <>
            <div className={styles.skillsheader} data-aos="fade-up">
                <h3>Education</h3>
            </div>
            <h4 className={styles.school} data-aos="fade-up">Alex Ekwueme Federal University, Ebonyi, Nigeria</h4>
            <div className={styles.year} data-aos="fade-up">
                <p>B.Sc. Criminology & Security studies.</p>
                <p>2018 - 2022</p>
            </div>
        </>
    )
}