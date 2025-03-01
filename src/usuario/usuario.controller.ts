// src/usuario/usuario.controller.ts
import { Request, Response } from 'express';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

const usuarioService = new UsuarioService();

export class UsuarioController {
    async create(req: Request, res: Response) {
        const createUsuarioDto: CreateUsuarioDto = req.body;
        const usuario = await usuarioService.create(createUsuarioDto);
        res.status(201).json(usuario);
    }

    async findAll(req: Request, res: Response) {
        const usuarios = await usuarioService.findAll();
        res.json(usuarios);
    }

    async findOne(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const usuario = await usuarioService.findOne(id);
        res.json(usuario);
    }

    async update(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const updateData = req.body;
        const usuario = await usuarioService.update(id, updateData);
        res.json(usuario);
    }

    async remove(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        await usuarioService.remove(id);
        res.status(204).send();
    }
}