import WithParallaxWrapper from "../../hocs/WithParallaxWrapper";
import { InView } from "react-intersection-observer";

import { Anchor } from "../Anchor";
import { Button } from "../Button";
import { Card } from "../Card";
import { Cover } from "../Cover";
import { Footer } from "../Footer";

import { AiOutlineMail } from "react-icons/ai";
import { SiMinutemailer } from "react-icons/si";

import ContactImg from "../../assets/contact.webp";
import useAppContext from "../../context/useContext";

export const Contact = ({ offset, id }) => {
   const { setActiveCard, contentRefs } = useAppContext();

   return (
      <InView
         threshold={0.25}
         onChange={(inView) => inView && setActiveCard(offset)}
         ref={contentRefs[id]}
      >
         {({ inView, ref }) => {
            return (
               <Cover image={ContactImg.src} className="contact__cover">
                  <section className="contact" ref={ref} id={id}>
                     <h2 className="contact__header">Contact</h2>
                     <Card
                        className="contact__card"
                        showArrow={false}
                        title="Let's Connect"
                     >
                        <div className="contact__icon">
                           <AiOutlineMail />
                        </div>
                        <div className="contact__overlay">
                           <p>
                              I&apos;m not seeking any opportunities at this
                              time, but feel free to take a copy of my{" "}
                              <Anchor
                                 href="/resume.pdf"
                                 className="contact__link"
                              >
                                 digital resume{" "}
                              </Anchor>{" "}
                              and please keep me in mind if you have any
                              opportunities for a{" "}
                              <span>Front End Software Engineer</span> open in
                              the future.
                           </p>
                           <Anchor href="mailto:jordanutz@outlook.com">
                              <Button type="primary" icon={<SiMinutemailer />}>
                                 Drop a Line
                              </Button>
                           </Anchor>
                        </div>
                     </Card>
                  </section>
                  <Footer />
               </Cover>
            );
         }}
      </InView>
   );
};

const WithContactWrapped = WithParallaxWrapper(Contact);

export default WithContactWrapped;
