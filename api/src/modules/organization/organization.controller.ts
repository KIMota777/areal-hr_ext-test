import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { OrganizationService } from './organization.service';

@Controller('organizations')
export class OrganizationController {
    constructor(private readonly orgService: OrganizationService) {}

    @Post()
    create(@Body() body: { name: string; comment?: string }) {
        return this.orgService.create(body.name, body.comment);
    }

    @Get()
    findAll() {
        return this.orgService.findAll();
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body: { name?: string; comment?: string }) {
        return this.orgService.update(Number(id), body.name, body.comment);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.orgService.remove(Number(id));
    }
}
