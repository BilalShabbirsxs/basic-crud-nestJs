import {Injectable, NotFoundException} from "@nestjs/common";
import {Class} from "./class.model";
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';


@Injectable()
export class ClassesService {
    private classes: Class[] = [];

    constructor(@InjectModel('Class') private readonly classModel: Model<Class> ){}
    
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async insertClass(title: string, subject: string){
        const newClass = new this.classModel({
            title: title,
            subject: subject,
        })
        const res = await newClass.save();
        //console.log(res)
        return res.id;
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async getAllclasses(){
        const classes = await this.classModel.find().exec();
        return classes;
        // can use slice here to make a copy
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async getSingleClass(cid: string){
        const clas = await this.findClass(cid);
        return clas;
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async updateClass(cid: string, title: string, subject:string){
        const updatedClass = await this.findClass(cid);
    
        if(title){
            updatedClass.title = title;
        }
        if(subject){
            updatedClass.subject = subject;
        }

        updatedClass.save();
        
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async removeClass(cid: string){
        const remClass = await this.classModel.deleteOne({"_id":cid}).exec();
        if(remClass.n===0){
            throw new NotFoundException('could not find that class');
        }
    }

    private async findClass(cid: string){
        let clas;
        try{
            clas = await this.classModel.findById(cid).exec();
        }catch(error){
            throw new NotFoundException('could not find that class');
        }
        
        if(!clas){
            throw new NotFoundException('could not find that class')
        }
        return clas;
    }

   
}