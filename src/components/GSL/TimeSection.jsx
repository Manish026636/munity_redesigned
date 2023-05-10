import React from "react";
import GSLSettings from "./GSLSettings";
import GSLTime from "./GSLTime";
import Feedback from "./Feedback";

const TimeSection = () => {
  return (
    <div>
      <GSLTime />
      <GSLSettings />
      <Feedback/>
    </div>
  );
};

export default TimeSection;
