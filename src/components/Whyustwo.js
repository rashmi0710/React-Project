import React from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import SupervisedUserCircleRoundedIcon from "@mui/icons-material/SupervisedUserCircleRounded";

const WhyUstwo = () => {
  return (
    <div className="WhyUs-container">
      <h1 className="service-primary-heading">
        We Completed 1200+ Certification Program Successfully & Counting
      </h1>
      <p className="service-primary-text">
        At Learning Exp. We Are Committed To Providing You With A Superior
        Learning Experience That Empowers You To Achieve Your Goals. Join Us
        Today And Embark On A Journey Of Discovery, Growth, And Success.
      </p>

      <div className="SymbolContainer">
        <div>
          <CheckCircleRoundedIcon
            style={{ fontSize: "larger", margin: "0% 10% 0% 10%", }}
          />
          <div>
            <h3>100+</h3>
            <h3>Batch Complete</h3>
          </div>
        </div>
        <div>
          <AssignmentTurnedInIcon
            style={{ fontSize: "larger", margin: "0% 10% 0% 10%" }}
          />
          <div>
            <h3>50+</h3>
            <h3>Active Batches</h3>
          </div>
        </div>
        <div>
          <SupervisedUserCircleRoundedIcon
            style={{ fontSize: "larger", margin: "0% 10% 0% 10%" }}
          />
          <div>
            <h3>10,000+</h3>
            <h3>Student Satisfied</h3>
          </div>
        </div>
        <div>
          <SupervisedUserCircleRoundedIcon
            style={{ fontSize: "larger", margin: "0% 10% 0% 10%" }}
          />
          <div>
            <h3>10+</h3>
            <h3>Course Modules</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUstwo;
