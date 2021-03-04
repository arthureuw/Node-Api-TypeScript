import expressLoader from './express';
import logger from "./logger";
import {Express} from "express";
import mongoose from "./mongoose";

export default async ({app}: {app: Express}) => {
    await mongoose();
    await expressLoader({app});
    logger.log("info", "Express Loader has initialized successfully! ✅");

};
