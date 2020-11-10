import { getRepository } from 'typeorm';

import Task from '../models/Task';

interface Request {
    id: string;
}

class DeleteTaskService {
    public async execute({id}: Request): Promise<void> {
        try {
            const taskRepository = getRepository(Task);

            await taskRepository.delete(id);

        } catch (error) {
            throw new Error(error);
        }
    }
}

export default DeleteTaskService;