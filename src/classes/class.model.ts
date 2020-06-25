import * as mongoose from 'mongoose';


export const ClassSchema = new mongoose.Schema({
    title: {type: String, required: true},
    subject: {type: [], required: true},
});

export interface Class {
    id: string; 
    title: string;
    subject: [],
}