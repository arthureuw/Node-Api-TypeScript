import {
    Schema, Document, Model, model,
} from 'mongoose';

const UserSchema = new Schema({
    mail: { type: 'string', unique: true, required: true },
    password: { type: 'string', select: false },
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    __v: { type: Number, select: false },
});

export interface User extends Document {
    _id: string;
    mail: string;
    password: string;
    firstName: string;
    lastName: string;
}

export const UserModel: Model<User> = model<User>('User', UserSchema);
