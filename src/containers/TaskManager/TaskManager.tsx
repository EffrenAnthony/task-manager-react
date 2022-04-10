import React, { useState } from 'react';
import { CreateTaskForm, TaskList } from '../../components';
import { TaskListType, TaskType } from '../../types/taskManagerTypes';

const TaskManager = () => {
  const [taskList, setTaskList] = useState<TaskListType>([]);
  const addTask = (task: TaskType) => {
    const taskListCopy = [...taskList]
    taskListCopy.push(task)
    setTaskList(taskListCopy)
  }
  return (
    <div>
      <CreateTaskForm addTask={addTask}/>
      <TaskList taskList={taskList}/>
    </div>
  );
};

export default TaskManager;