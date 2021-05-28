import {
    Schema, Document, Model, model,
} from 'mongoose';

const UserSchema = new Schema({
    email: { type: String, unique: true, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    birthDate: { type: Date },
    phone: { type: String, required: true },
    avatarUrl: { type: String, required: true },
    gender: { type: String, required: true },
    details: { type: String, required: true },
    __v: { type: Number, select: false },
});

export interface User extends Document {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    phone: string;
    avatarUrl: string;
    gender: string;
    details: string;
}

export const UserModel: Model<User> = model<User>('User', UserSchema);
