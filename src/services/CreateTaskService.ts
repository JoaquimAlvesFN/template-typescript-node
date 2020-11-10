import { getRepository } from 'typeorm';

import Task from '../models/Task';

interface Request {
    name: string;
    description: string;
    user_id: number;
}

class CreateTaskService {
    public async execute({name, description, user_id}: Request): Promise<Task> {
        try {
            const taskRepository = getRepository(Task);

            const task = taskRepository.create({
                name,
                description,
                user_id
            });

            await taskRepository.save(task);

            return task;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default CreateTaskService;