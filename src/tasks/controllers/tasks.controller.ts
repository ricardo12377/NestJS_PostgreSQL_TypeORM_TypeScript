import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { TasksService } from '../services/tasks.service';

@Controller('api/tasks')
export class TasksController {

    constructor(
        private TasksService: TasksService
    ){}

    @Get()
    getAll(){
        return this.TasksService.findAll();
    }

    @Get(':id')
    getOne( @Param('id') id:number){
        return this.TasksService.findOne(id);
    }

    @Post()
    create(@Body() body: any){
        return this.TasksService.create(body);
    }

    @Put(':id')
    update(@Param('id') id:number, @Body() body:any){
        return this.TasksService.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id') id:number){
        return this.TasksService.delete(id);
    }
}
