import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ClassesService } from './classes.service';

@Controller('classes')
export class ClassesController {
    constructor(private readonly classesService: ClassesService){}

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    @Post()
    async addclass(
        @Body('title') classTit: string, 
        @Body('subject') classSub: string 
        ) {
        const genid = await this.classesService.insertClass(classTit, classSub);
        return {id: genid}
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    @Get()
    async getclasses(){
        const classes = await this.classesService.getAllclasses();
        return classes;
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    @Get(':id')
    getClass(@Param('id') cid: string, ){
        return this.classesService.getSingleClass(cid);
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    @Patch(':id')
    async updateClass(@Param('id') cid: string, @Body('title') classTit: string, @Body('subject') classSub:string){
        await this.classesService.updateClass(cid, classTit, classSub);
        return "Updated";
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    @Delete(':id')
    async removeClass(@Param('id') cid: string, ){
        await this.classesService.removeClass(cid);
        return "Deleted";     
    }

}
