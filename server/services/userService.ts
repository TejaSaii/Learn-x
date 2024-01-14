import { User } from '../db';
import { IUser } from '../interfaces'

const getUserFromEmail = async (email: string) => {
    try {
        const user = await User.findOne({ email });
        return user;
    }
    catch(err){
        throw new Error('ServiceError: Unable to check User in db');
    }
};

const saveUser = async (user: IUser) => {
    try{
        const newUser = new User(user);
        await newUser.save();
        return newUser;
    }
    catch(err){
        throw new Error('Unable to save User: '+err);
    }
}

const getUser = async (user: IUser) => {
    try{
        const existingUser = await User.findOne(user);
        return existingUser;
    }
    catch(err){
        throw new Error('Unable to check user in db: '+err);
    }
}

const getUserById = async (userId: string) => {
    try{
        const user = await User.findOne({_id: userId});
        return user;
    }
    catch(err){
        throw new Error('Invalid User id: '+err);
    }
}

export default {getUserFromEmail, saveUser, getUser, getUserById};
