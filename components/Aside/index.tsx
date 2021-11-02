import { Anchor } from "../Anchor";
import { Card } from "../Card";
import { Navigation } from "../Navigation";
import { PageHeader } from "../PageHeader";
import { Social } from "../Social";

export const Aside = () => (
   <aside className="aside">
      <Navigation />
      <Card
         className="aside__card"
         image="https://i.ibb.co/6BJWW7n/DSC3017.jpg"
         showArrow={false}
      >
         <section className="aside__subheader">
            <PageHeader level={2}>Jordan Utz</PageHeader>
            <PageHeader level={6}>Front End Software Engineer</PageHeader>
         </section>
         <Social />
         <section className="aside__quicklinks">
            <Anchor
               className="aside__anchor"
               href="https://drive.google.com/file/d/1kSfGKXYyAFxBkBOcTTrAB6phvBypGsSl/view?usp=sharing"
            >
               Resume
            </Anchor>
            <Anchor
               className="aside__anchor"
               href="mailto:jordanutz@outlook.com"
            >
               Say Hello!
            </Anchor>
         </section>
      </Card>
   </aside>
);
