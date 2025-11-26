import GitHubIcon from "../assets/github_icon.svg";
import LinkedInIcon from "../assets/linkedin_icon.svg";
import styles from "../soloBusinessCard.module.css";

export function Footer() {
  return (
    <footer className={styles.businessFooter}>
      <a
        href="https://www.linkedin.com/in/ana-marija-dra%C5%A1kovi%C4%87-0852991b9/"
        aria-label="You can contact me on LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={LinkedInIcon} alt="" draggable={false} />
      </a>

      <a
        href="https://github.com/anamarijadraskovic"
        aria-label="See my projects on GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={GitHubIcon} alt="" draggable={false} />
      </a>
    </footer>
  );
}
