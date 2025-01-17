import { Router } from "express";
import { listUsers, createUser } from '../services/user';

const router = Router();

router.get('/', async (req, res) =>{
    const userList = await listUsers();
    res.send(userList);
});

router.post('/', async (req, res) =>{
    const user = await createUser(req.body);
    res.status(201).send(user);                 // 'status 201': código HTTP de criação de coisas.
});                                             // e 'send(user)': manda o usuário criado.

router.delete('/', (req, res) =>{
    res.send('DELETE USER');
});
export default router;