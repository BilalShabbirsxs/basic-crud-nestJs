import { Controller, Post, Body } from '@nestjs/common';
import { ClassesService } from './classes.service';

@Controller('classes')
export class ClassesController {
    constructor(private readonly classesService: ClassesService){}

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    @Post()
    addclass(
        @Body('title') classTit: string, 
        @Body('subject') classSub: string 
        ) {
        const genid = this.classesService.insertClass(classTit, classSub);
        return {id: genid}
    }
}
