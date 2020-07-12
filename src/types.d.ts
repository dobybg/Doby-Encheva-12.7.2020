type Task = {
    id: number;
    username: string;
    phone: string;
    email: string;
    date: Date;
    complete: boolean;
};

type AddTask = (task: Task) => void;

