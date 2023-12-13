import React from "react";

const PersonalDevelopment = () => {
  return (
    <div className="personal-development-container">
      <h1 className="title">Personal Development: Invest in Yourself</h1>
      <img
        src="https://image.com/personal-development-image.png"
        alt="Person meditating"
        className="illustration"
      />
      <div className="content-wrapper">
        <h2>What is Personal Development?</h2>
        <p>
          Personal development is a lifelong journey of self-improvement. It
          involves actively working on your physical, mental, and emotional
          well-being to reach your full potential. This includes setting goals,
          developing new skills, and overcoming challenges.
        </p>
        <h2>Benefits of Personal Development</h2>
        <ul className="list">
          <li>Increased Self-Awareness</li>
          <li>Improved Confidence and Self-Esteem</li>
          <li>Enhanced Personal Growth and Fulfillment</li>
          <li>Greater Productivity and Performance</li>
          <li>Stronger Relationships and Communication Skills</li>
        </ul>
      </div>
      <div className="resources-section">
        <h2>Start Your Personal Development Journey</h2>
        <p>
          Explore these resources to get started on your path to self-improvement:
        </p>
        <ul className="resources-list">
          <li>
            <a href="#">
              <img
                src="https://image.com/resource1-icon.png"
                alt="Resource 1 icon"
              />
              Resource 1: [Book/article/video] on self-improvement
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://image.com/resource2-icon.png"
                alt="Resource 2 icon"
              />
              Resource 2: [Workshop/course/challenge] on personal development
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PersonalDevelopment;
