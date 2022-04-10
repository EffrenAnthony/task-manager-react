import React, { useState } from "react";
import { TaskType } from "../../types/taskManagerTypes";

interface CreateTaskFormProps {
  addTask: (task: TaskType) => void;
}

const CreateTaskForm = ({
  addTask,
}: CreateTaskFormProps): React.ReactElement => {
  // const [formValue, setFormValue] = useState('')
  const [formValue, setFormValue] = useState<string>("");
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addTask({
      title: formValue,
    })
    setFormValue('')
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue(e.target.value);
    // console.log(e.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write a task"
          value={formValue}
          onChange={handleChange}
        />
        <button>Add task</button>
        {/* {formValue} */}
      </form>
    </div>
  );
};

export default CreateTaskForm;
