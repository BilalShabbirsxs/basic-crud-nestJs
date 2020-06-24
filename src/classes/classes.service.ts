import {Injectable} from "@nestjs/common";
import {Class} from "./class.model";


@Injectable()
export class ClassesService {
    classes: Class[] = [];
    
    insertClass(title: string, subject: string){
        const cid = new Date().toString();
        const newClass = new Class(cid, title, subject)
        this.classes.push(newClass);
        return cid;
    }

   
}