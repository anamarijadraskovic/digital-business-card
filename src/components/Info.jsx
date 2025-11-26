import MyProfilePic from "../assets/avatar.jpeg";
import EmailIcon from "../assets/email_icon.svg";
import LinkedInIcon from "../assets/linkedin_btn.svg";
import styles from "../soloBusinessCard.module.css";

export function Info() {
  return (
    <section className={styles.infoContainer}>
      <img
        src={MyProfilePic}
        alt="Ana-Marija Drašković smiling at the camera"
        className={styles.mainImg}
      />
      <div>
        <h1>Ana-Marija Drašković</h1>
        <h2>Frontend Developer</h2>
      </div>
      <div className={styles.businessBtnContainer}>
        <a
          href="mailto:youremail@example.com"
          aria-label="Send me an email"
          className={styles.linkBtn}
        >
          <img src={EmailIcon} alt="" draggable={false} />
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/ana-marija-dra%C5%A1kovi%C4%87-0852991b9/"
          aria-label="You can contact me on LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.linkBtn} ${styles.accent}`}
        >
          <img src={LinkedInIcon} alt="" draggable={false} />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
