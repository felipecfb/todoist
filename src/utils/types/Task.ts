export interface TaskListProps {
  checkTask: (id: string | any) => void;
  deleteTask: (id: string | any) => void;
  task: string;
  createdAt: string;
  ready: boolean;
}

export interface RegisterTaskProps {
  value: string;
  changeValue: React.ChangeEventHandler<HTMLInputElement> | undefined;
  submit: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface TasksProps {
  id: string;
  task: string;
  createdAt: string;
  checked: boolean;
}
