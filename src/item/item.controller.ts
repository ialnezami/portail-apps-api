import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  async findAll() {
    return await this.itemService.findAll();
  }

  @Get('public')
  async findAllPublic() {
    return await this.itemService.findAllPublic();
  }
  @Get('private')
  async findAllPrivate() {
    return await this.itemService.findAllPrivate();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.itemService.findOne(id);
  }

  @Post()
  async create(@Body() createItemDto: CreateItemDto) {
    return await this.itemService.create(createItemDto);
  }

  @Patch(':id')
  async upupdateitemate(
    @Param('id') id: string,
    @Body() updateItemDto: UpdateItemDto,
  ) {
    return await this.itemService.updateitem(id, updateItemDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.itemService.remove(id);
  }
}
