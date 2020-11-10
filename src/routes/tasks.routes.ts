import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateTaskService from '../services/CreateTaskService';
import DeleteTaskService from '../services/DeleteTaskService';
import UpdateTaskService from '../services/UpdateTaskService';

import Task from '../models/Task';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const tasksRouter = Router();

tasksRouter.use(ensureAuthenticated);

tasksRouter.get('/', async (request, response) => {
    const taskRepository = getRepository(Task);

    const task = await taskRepository.find();

    return response.json(task);
});

tasksRouter.post('/', async (request, response) => {
    const {
        name,
        description,
        user_id
    } = request.body;

    const createTask = new CreateTaskService();

    const task = await createTask.execute({
        name,
        description,
        user_id
    });

    return response.json(task);
});

tasksRouter.put('/:id', async (request, response) => {
    const {id} = request.params;
    const {name, description} = request.body;

    const updateTask = new UpdateTaskService();

    const task = await updateTask.execute({
        id,
        name,
        description
    });

    return response.status(200).json(task);

});

tasksRouter.delete('/:id', async (request, response) => {
    const {id} = request.params;

    const deleteTask = new DeleteTaskService();

    const task = await deleteTask.execute({id});

    return response.status(204).json(task);

});

export default tasksRouter;