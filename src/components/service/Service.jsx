import React from "react";

const ServiceContent = [
  {
    icon: "icon-home",
    title: "Machine Learning",
    descriptions: `Need to make predictions based on historical data? Or want to explore your data for certain patterns?
    I am passionate about learning the theory that is pushing the cutting edge of ML, 
    both supervised and unsupervised algorithms. `,
  },
  {
    icon: "icon-desktop",
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
    descriptions: `An agile mindset helps me to execute tasks efficiently and on time and even more important: With enthusiasm, passion and personal heartiness.`,
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
              </div>
              <div className="feature-content">
                <h6>{val.title}</h6>
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
