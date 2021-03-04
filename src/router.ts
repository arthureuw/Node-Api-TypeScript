import {Router} from "express";
import {deleteUser, getUserById, getUsers, postUser, updateUser} from "./Controller/UserController";

const appRouter: Router = Router();

appRouter.get('/', (req, res) => {
    res.send('Hello World!')
});

// Users
appRouter.get("/user", getUsers);
appRouter.get('/user/:id', getUserById);
appRouter.post("/user", postUser);
appRouter.delete('/user/:id', deleteUser);
appRouter.put('/user/:id', updateUser);
// Users

export default appRouter;
