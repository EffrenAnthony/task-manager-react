export type TaskType = {
  title: string;
  image?: string;
  description?: string;
  priority?: number;
};

export type TaskListType = TaskType[]