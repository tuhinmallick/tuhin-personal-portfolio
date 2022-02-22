import React from "react";
import { FaBeer } from 'react-icons/fa';

const ServiceContent = [
  {
    icon: "icon-FaBeer",
    title: "Machine Learning",
    descriptions: `Need to make predictions based on historical data? Or want to explore your data for certain patterns?
    I am passionate about learning the theory that is pushing the cutting edge of ML, 
    both supervised and unsupervised algorithms. `,
  },
  {
    icon: "fa-FaBeer",
    title: "Data Science and analysis",
    descriptions: `A picture says more than a thousand words..but what exactly do you want to visualize?
    I have seen a lot of examples of very good bus also very bad visualizations. `,
  },
  {
    icon: "icon-target",
    title: "Full-stack web developer",
    descriptions: `As a web developer, I help to design and create the fast and responsive website for starters and freelancers. 
    I made this website with React and hosted it through heroku.`,
  },
  {
    icon: "icon-target",
    title: "Cloud and Parallel Computing",
    descriptions: `I utilize AWS and Azure to develop and productionize machine learning systems. And to parallelize
    I used HIVE, Hadoop and Spark.`,
  },
  {
    icon: "icon-target",
    title: "Devops",
    descriptions: `I utilize AWS and Azure to develop and productionize machine learning systems. And to parallelize
    I used HIVE, Hadoop and Spark.`,
  },
  {
    icon: "icon-target",
    title: "Agile coach",
    descriptions: `I utilize AWS and Azure to develop and productionize machine learning systems. And to parallelize
    I used HIVE, Hadoop and Spark.`,
  },

];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div className="col-md-6 col-lg-4 my-3" key={i}>
            <div className="feature-box-01">
              <div className="icon" >
                <i className={`icon ${val.icon}`}></i>
                {/* < FaBeer/> */}
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
