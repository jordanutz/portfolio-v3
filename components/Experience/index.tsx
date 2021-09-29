/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Container } from "../Container";
import { PageHeader } from "../PageHeader";
import { Carousel } from "../Carousel";
import { Card } from "../Card";
import { Tag } from "../Tag";
import { IoIosRocket } from "react-icons/Io";
import { experienceData } from "./data";
import { AiTwotoneCalendar } from "react-icons/ai";

import styles from "./Experience.module.css";

import elink from "./assets/elink.jpg";
import webstaurant from "./assets/webstaurant.jpg";
import kroger from "./assets/kroger.jpg";

export const Experience = () => {
   const indicators = [kroger, webstaurant, elink];
   const [active, setActive] = useState(0);

   return (
      <Container>
         <Card
            className={styles.experience__card}
            label={<IoIosRocket />}
            title="Experience"
         >
            <section className={styles.experience__grid}>
               {experienceData.map(
                  (experience, index) =>
                     active === index && (
                        <section
                           className={styles.experience__section}
                           key={experience.id}
                        >
                           <section className={styles.experience__details}>
                              <h4>
                                 {`${experience.role} | `}
                                 <span>{`${experience.company}`}</span>
                              </h4>
                              <Tag
                                 icon={<AiTwotoneCalendar />}
                                 title={experience.date}
                              />
                           </section>
                           <ul className={styles.experience__list}>
                              {experience.responsibilities.map(
                                 (responsibility, index) => (
                                    <li
                                       className={styles.experience__item}
                                       key={index}
                                    >
                                       {responsibility}
                                    </li>
                                 )
                              )}
                           </ul>
                        </section>
                     )
               )}

               <Carousel
                  indicators={indicators}
                  active={active}
                  setActive={setActive}
               />
            </section>
         </Card>
      </Container>
   );
};
