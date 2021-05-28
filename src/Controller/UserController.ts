import { Request, Response } from 'express';
import { User, UserModel } from '../Model/UserModel';
import { deleteOneBy, findManyBy, findOneBy, saveData, updateOneBy } from '../Service/MongooseService';

export const postUser = async (req: Request, res: Response): Promise<void> => {
    const { mail } = req.body;

    if (!mail) {
        res.status(400).json({
            data: {},
            error: { code: 'EMAIL_REQUIRED' },
        });
        return;
    }

    try {
        const existingUser = await findOneBy<User>({ model: UserModel, condition: { mail } });

        if (existingUser) {
            res.status(400).json({
                data: {},
                error: { code: 'USER_EXISTS' },
            });
            return;
        }

        const newUser = await saveData<User>({ params: req.body, model: UserModel });
        res.status(200).json({
            data: newUser,
            error: {},
        });
    } catch (e) {
        res.send(e);
    }
}

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    const users = await findManyBy<User>({ model: UserModel, condition: {} });

    res.status(200).json({
        data: users,
        error: {},
    });
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const user = await findOneBy<User>({ model: UserModel, condition: { _id: id } });
        if (!user) {
            res.status(200).json({
                data: {},
                error: { code: 'CANNOT_GET_USER' },
            });
            return;
        }
        res.status(200).json({
            data: user,
            error: {},
        });
    } catch (e) {
        res.send(e);
    }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
        const userUpdate = await updateOneBy<User>({
            model: UserModel,
            condition: { _id: id },
            set: {
                ...req.body,
            },
        });

        if (!userUpdate) {
            res.status(400).json({
                data: {},
                error: { code: 'CANNOT_UPDATE_USER' },
            });

            return;
        }

        res.status(204).json({
            data: req.body,
            error: {},
        });
    } catch (e) {
        res.send(e);
    }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
        const deletion = await deleteOneBy({ model: UserModel, condition: { _id: id } });

        if (!deletion) {
            res.status(400).json({
                data: {},
                errors: { code: 'CANT_DELETE_USER' },
            });
        }

        res.status(204).send();
    } catch (e) {
        res.send(e);
    }
};


