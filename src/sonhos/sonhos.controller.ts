
import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    ParseIntPipe
} from '@nestjs/common';

import { SonhosService } from './sonhos.service.js';

@Controller('sonhos')
export class SonhosController {

    constructor(
        private readonly sonhosService: SonhosService
    ) {}

    // GET - Consultar todos
    @Get()
    listar() {
        return this.sonhosService.listar();
    }

    // GET - Consultar pelo ID
    @Get(':id')
    buscarPorId(
        @Param('id', ParseIntPipe) id: number
    ) {
        return this.sonhosService.buscarPorId(id);
    }

    // POST - Cadastrar
    @Post()
    cadastrar(
        @Body() dados: {
            descricao: string;
            meta: string;
        }
    ) {
        return this.sonhosService.cadastrar(dados);
    }

    // PUT - Atualizar
    @Put(':id')
    atualizar(
        @Param('id', ParseIntPipe) id: number,
        @Body() dados: {
            descricao?: string;
            meta?: string;
        }
    ) {
        return this.sonhosService.atualizar(id, dados);
    }

    // DELETE - Excluir
    @Delete(':id')
    remover(
        @Param('id', ParseIntPipe) id: number
    ) {
        return this.sonhosService.remover(id);
    }
    
}