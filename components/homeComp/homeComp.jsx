import { Fade } from "react-awesome-reveal";
import { monthsLargeName } from "../../arrays/arrays";
import { fontColor, primaryColor } from "../../libs/color";
import TimerCard from "../timerCard/timerCard";

import styled from "styled-components";
import Image from "next/image";

const HomeCom = styled.div`
  .mainTitle {
    font-family: "Script";
    font-size: 50px;
  }
  .main {
    background-size: cover;
    min-height: 100vh;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${primaryColor};
    color: ${fontColor};
    .homeContent {
      z-index: 2;
    }

    .timer {
      max-width: 100vw;
      display: flex;
    }

    @media (min-width: 768px) {
      .mainTitle {
        font-size: 70px;
      }
      .homeContent {
        position: absolute;
        // left: 0;
        //enable for left timer
      }
    }
  }
`;
const HomeComp = ({ webSiteSetting, remainingTime }) => {
  const date = new Date(
    webSiteSetting.year,
    webSiteSetting.month,
    webSiteSetting.day
  );
  return (
    <HomeCom>
      <div
        className="main"
        style={{
          backgroundImage: `url(data:image/jpeg;base64,${webSiteSetting.heroimg})`,
        }}
        id="home"
      >
        <div className="homeContent">
          <div>
            <h1 className="mainTitle">{webSiteSetting.title}</h1>
            <h2>
              {`${date.getDate()} ${
                monthsLargeName[date.getMonth()]
              } ${date.getFullYear()}`}
            </h2>
          </div>
          <div className="timer">
            {remainingTime.years > 0 ? (
              <TimerCard title="years" time={remainingTime.years} />
            ) : (
              <></>
            )}
            <TimerCard title="months" time={remainingTime.months} />
            <TimerCard title="days" time={remainingTime.days} />
            <TimerCard title="hours" time={remainingTime.hours} />
            <TimerCard title="minutes" time={remainingTime.minutes} />
            <TimerCard title="seconds" time={remainingTime.seconds} />
          </div>
        </div>
      </div>

      {/* <Fade
        className="btRight coner-decor"
        direction="right"
        duration={2000}
        triggerOnce={true}
      >
        <Image width={350} height={350} src={"/webContent/bottomRight.png"} />
      </Fade>

      <Fade
        className="tpLeft coner-decor"
        direction="left"
        duration={2000}
        triggerOnce={true}
      >
        <Image width={350} height={350} src={"/webContent/topLeft.png"} />
      </Fade> */}
    </HomeCom>
  );
};

export default HomeComp;
