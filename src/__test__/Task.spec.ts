import request from 'supertest';

import app from '../index';

describe('Task', () => {
    it('should be able to list transactions', async () => {
        await request(app).post('/tasks').send({
            name: 'nova tarefa',
            description: 'tarefa de teste',
            user_id: 1
        });

        const response = await request(app).get('/tasks');

        expect(response.status).toBe(200);
        expect(response.body).toMatchObject(
            expect.objectContaining({
                name: 'nova tarefa',
                description: 'tarefa de teste',
                user_id: 1
            }),
        );
    });
});
