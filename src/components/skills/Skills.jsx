import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const skillList = ["Programming languages", "Machine learning", "Software engineering", "Data analysis", "Web Development"];
const skillListContent = [
  {
    skillItems: [
      {
        name: "Python",
        numberPercent: "92",
        startCount: "0",
        endCount: "92",
      },
      {
        name: "Java",
        numberPercent: "92",
        startCount: "0",
        endCount: "92",
      },
      {
        name: "C++",
        numberPercent: "92",
        startCount: "0",
        endCount: "92",
      },
      {
        name: "C++",
        numberPercent: "92",
        startCount: "0",
        endCount: "92",
      },
      
    ],
  },
  {
    skillItems: [
      {
        name: "Supervised ML",
        numberPercent: "92",
        startCount: "0",
        endCount: "92",
      },
      {
        name: "Unsupervised ML",
        numberPercent: "92",
        startCount: "0",
        endCount: "92",
      },
      {
        name: "Deep learning",
        numberPercent: "92",
        startCount: "0",
        endCount: "92",
      },
    ],
  },
  {
    skillItems: [
      {
        name: "Front-end",
        numberPercent: "92",
        startCount: "0",
        endCount: "92",
      },
      {
        name: "Databases",
        numberPercent: "92",
        startCount: "0",
        endCount: "92",
      },
      {
        name: "Deployment",
        numberPercent: "92",
        startCount: "0",
        endCount: "92",
      },
    ],
  },
  {
    skillItems: [
      {
        name: "Data wrangling",
        numberPercent: "92",
        startCount: "0",
        endCount: "92",
      },
      {
        name: "Data visualization",
        numberPercent: "92",
        startCount: "0",
        endCount: "92",
      },
      {
        name: "Statistics",
        numberPercent: "92",
        startCount: "0",
        endCount: "92",
      },
    ],
  },
];

const Skills = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <>
    <div className="skill-filter-01">
      <Tabs centered>
          <TabList className="filter d-flex flex-wrap justify-content-start">
            {skillList.map((val, i) => (
              <Tab key={i}>
                {val}
              </Tab>
            ))}
          </TabList>
          {/* End tablist */}
          {skillListContent.map((tabContent, i) => (
            <TabPanel key={i}>
              <div className="skill-wrapper" key={i}>
                {tabContent.skillItems.map((skill, i) => (
                  <div className="skill-lt" key={i}>
                    <h6>{skill.name}</h6>
                    <span className="count-inner">
                      <CountUp
                        start={focus ? skill.startCount : null}
                        end={skill.endCount}
                        duration={1}
                        redraw={true}
                      >
                        {({ countUpRef }) => (
                          <VisibilitySensor
                            onChange={(isVisible) => {
                              if (isVisible) {
                                setFocus(true);
                              }
                            }}
                          >
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      %
                    </span>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-in"s
                        style={{ width: skill.numberPercent + "%" }}
                      ></div>
                    </div>
                  </div>
                  // End skill-lt
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default Skills;
