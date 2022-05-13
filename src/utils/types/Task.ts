import { MouseEventHandler } from "react";

export interface TaskListProps {
  check: MouseEventHandler<HTMLImageElement> | undefined;
  deleteTask: React.MouseEventHandler<HTMLImageElement> | undefined;
  task: string;
  createdAt: Date;
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
  createdAt: Date;
  checked: boolean;
}
