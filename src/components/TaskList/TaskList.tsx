import React from "react";
import { TaskListType } from "../../types/taskManagerTypes";
import Task from "../Task";

interface TaskListProps {
  taskList: TaskListType
}

const TaskList = ({taskList}:TaskListProps) => {
  // const [taskList, setTaskList] = useState<TaskType[]>([]);

  return (
    <div>
      {taskList.map((task, index) => (
        <Task key={index} title={task.title} />
      ))}
      {/* <button
        onClick={() => {
          const taskListcopy = [...taskList];
          taskListcopy.push({ title: "hola" });
          setTaskList(taskListcopy);
        }}
      >
        ADD ITEM
      </button> */}
    </div>
  );
};

export default TaskList;
