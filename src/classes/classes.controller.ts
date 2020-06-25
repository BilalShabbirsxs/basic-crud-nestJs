import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { get } from 'http';

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

    @Get()
    async getclasses(){
        const classes = await this.classesService.getAllclasses();
        return classes;
    }

    @Get(':id')
    getClass(@Param('id') cid: string, ){
        return this.classesService.getSingleClass(cid);
    }

    @Patch(':id')
    async updateClass(@Param('id') cid: string, @Body('title') classTit: string, @Body('subject') classSub:string){
        await this.classesService.updateClass(cid, classTit, classSub);
        return "Updated";
    }

    @Delete(':id')
    async removeClass(@Param('id') cid: string, ){
        await this.classesService.removeClass(cid);
        return "Deleted";     
    }

}
