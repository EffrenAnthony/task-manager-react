import React from "react";
import { TaskType } from "../../types/taskManagerTypes";

const Task = ({
  title,
  image,
  description,
  priority,
}: TaskType): React.ReactElement => {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export default Task;
