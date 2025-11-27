import {Body, Controller, Post, Patch, Param, Delete, BadRequestException, Get} from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { createOrganizationSchema } from './dto/create-organization.dto';
import { updateOrganizationSchema } from './dto/update-organization.dto';

@Controller('organizations')
export class OrganizationController {
    constructor(private readonly orgService: OrganizationService) {}

    @Post()
    async create(@Body() body: any) {
        const { error, value } = createOrganizationSchema.validate(body);
        if (error) throw new BadRequestException(error.details.map(d => d.message).join(', '));
        return this.orgService.create(value.name, value.comment);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        const { error, value } = updateOrganizationSchema.validate(body);
        if (error) throw new BadRequestException(error.details.map(d => d.message).join(', '));
        return this.orgService.update(Number(id), value.name, value.comment);
    }
    @Get()
    findAll() {
        return this.orgService.findAll();
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.orgService.remove(Number(id));
    }
}
