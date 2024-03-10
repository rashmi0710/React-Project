import React from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import SupervisedUserCircleRoundedIcon from "@mui/icons-material/SupervisedUserCircleRounded";

const WhyUstwo = () => {
  return (
    <div id= "goals"className="WhyUsTwo-container">
      <h1 style={{ fontSize: "3rem", margin: "0rem 3rem 0rem 3rem" }}>
        We Completed 1200+ Certification Program Successfully & Counting
      </h1>
      <p className="service-primary-text">
        At Learning Exp. We Are Committed To Providing You With A Superior
        Learning Experience That Empowers You To Achieve Your Goals. Join Us
        Today And Embark On A Journey Of Discovery, Growth, And Success.
      </p>
      <div class="grid-container">
        <div class="grid-item">
          <CheckCircleRoundedIcon />
          <div>
            <h1>100+</h1>
            <p>Batch Complete</p>
          </div>
        </div>
        <div class="grid-item">
          <AssignmentTurnedInIcon />
          <div>
            <h1>50+</h1>
            <p>Active Batches</p>
          </div>
        </div>
        <div class="grid-item">
          <SupervisedUserCircleRoundedIcon />
          <div>
            <h1>10,000+</h1>
            <p>Student Satisfied</p>
          </div>
        </div>
        <div class="grid-item">
          <SupervisedUserCircleRoundedIcon />
          <div>
            <h1>10+</h1>
            <p>Course Modules</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUstwo;
