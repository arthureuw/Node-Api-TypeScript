import {Router} from "express";
import {deleteUser, getUserById, getUsers, postUser, updateUser} from "./Controller/UserController";

const appRouter: Router = Router();

appRouter.get('/', (req, res) => {
    res.send('Hello World!')
});

// Users
appRouter.get("/users", getUsers);
appRouter.get('/users/:id', getUserById);
appRouter.post("/users", postUser);
appRouter.delete('/users/:id', deleteUser);
appRouter.put('/users/:id', updateUser);
// Userss

export default appRouter;
