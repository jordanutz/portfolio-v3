import { Anchor } from "../Anchor";
import styles from "./SocialBar.module.css";
import {
   RiInstagramLine,
   RiLinkedinFill,
   RiCodepenFill,
   RiGithubFill,
} from "react-icons/ri";

export const SocialBar = () => (
   <section className={styles.socialBar}>
      <Anchor href="https://github.com/jordanutz">
         <RiGithubFill />
      </Anchor>
      <Anchor href="https://www.linkedin.com/in/jordanutz/">
         <RiLinkedinFill />
      </Anchor>
      <Anchor href="https://codepen.io/jordanutz">
         <RiCodepenFill />
      </Anchor>
      <Anchor href="https://www.instagram.com/thejordanutz">
         <RiInstagramLine />
      </Anchor>
   </section>
);
