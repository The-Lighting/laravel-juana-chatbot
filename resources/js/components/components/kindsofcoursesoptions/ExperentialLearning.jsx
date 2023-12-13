import React from "react";

const ExperientialLearning = () => {
  return (
    <div className="experiential-learning-container">
      <h1 className="title">Experiential Learning: Learn by Doing</h1>
      <img
        src="https://image.com/experiential-learning-image.png"
        alt="Group of people participating in an activity"
        className="illustration"
      />
      <div className="content-wrapper">
        <h2>What is Experiential Learning?</h2>
        <p>
          Experiential learning is an educational approach that emphasizes
          active participation and hands-on experience. By engaging in real-world
          activities, simulations, and projects, learners gain deeper
          understanding and develop critical skills.
        </p>
        <h2>Benefits of Experiential Learning</h2>
        <ul className="list">
          <li>Enhanced Skills Development</li>
          <li>Increased Problem-Solving Ability</li>
          <li>Improved Critical Thinking Skills</li>
          <li>Greater Self-Awareness and Confidence</li>
          <li>Boosted Motivation and Engagement</li>
        </ul>
      </div>
      <div className="activities-section">
        <h2>Explore Our Experiential Activities</h2>
        <p>
          Choose an activity from below to get started:
        </p>
        <ul className="activities-list">
          <li>
            <a href="#">
              <img
                src="https://image.com/activity1-icon.png"
                alt="Activity 1 icon"
              />
              Activity 1: Participate in a [simulation/project]
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://image.com/activity2-icon.png"
                alt="Activity 2 icon"
              />
              Activity 2: Complete a [challenge/task]
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExperientialLearning;
