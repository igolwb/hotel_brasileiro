import express from 'express';
import {buscarReservas, criarReserva, buscarReservaId, atualizarReserva, deletarReserva} from '../controllers/reservasController.js';

const router = express.Router();

    router.post('/', criarReserva);

    router.get('/', buscarReservas);

    router.get("/:id", buscarReservaId);

    router.put('/:id', atualizarReserva);

    router.delete("/:id", deletarReserva);

    export default router;