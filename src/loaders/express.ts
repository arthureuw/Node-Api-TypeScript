import cors from 'cors';
import express, {Express} from "express";
import appRouter from "../router";

export default ({app}: {app: Express}) => {

    app.use(cors());
    app.use(express.json());

    app.use('/api', appRouter);
};
