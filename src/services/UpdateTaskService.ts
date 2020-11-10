import { getRepository } from 'typeorm';

import Task from '../models/Task';

interface Request {
    id: string;
    name?: string;
    description?: string;
}

class UpdateTaskService {
    public async execute({id, name, description}: Request): Promise<void> {
        try {
            const taskRepository = getRepository(Task);

            await taskRepository.update(id, {name, description});

            // const task = await taskRepository.findOne(id);

            // return task;

        } catch (error) {
            throw new Error(error);
        }
    }
}

export default UpdateTaskService;