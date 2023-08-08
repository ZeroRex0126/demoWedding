import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import {
  AboutComponent,
  Contact,
  EventsComp,
  Family,
  Gallery,
  HomeComp,
  RSVP,
  StoryComponent,
  TimerCard,
  TopNav,
} from "../components";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function Home({ calRemaining, webSiteSetting, remainingTime }) {
  useEffect(() => {
    const interval = setInterval(() => {
      calRemaining();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mainContainer">
      {/* <button></button> */}
      {/* <div className="door left"></div>
      <div className="door right"></div> */}
      <Head>
        <title>{webSiteSetting.title} - Home</title>
        <meta name="description" content="Home page" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="navContainer">
        <TopNav webSiteSetting={webSiteSetting} />
      </div>
      <HomeComp webSiteSetting={webSiteSetting} remainingTime={remainingTime} />

      <AboutComponent webSiteSetting={webSiteSetting} />
      <StoryComponent webSiteSetting={webSiteSetting} />
      {/* <Gallery webSiteSetting={webSiteSetting} /> */}
      {/* <Family webSiteSetting={webSiteSetting} /> */}
      <EventsComp webSiteSetting={webSiteSetting} />
      <RSVP webSiteSetting={webSiteSetting} />
      <Contact webSiteSetting={webSiteSetting} />
    </div>
  );
}
