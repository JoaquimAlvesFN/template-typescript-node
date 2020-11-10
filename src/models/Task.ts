import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';

import User from './User';

@Entity('tasks')
class Task {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;
    
    @Column()
    description: string;

    @Column()
    finish: number;

    @OneToOne(() => User)
    @JoinColumn({name: 'user_id'})
    user: User;

    @Column({type: 'integer'})
    user_id: number;
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Task;