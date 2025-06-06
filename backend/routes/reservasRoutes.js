import express from 'express';
import {buscarReservas, criarReserva, buscarReservaId, 
        atualizarReserva, deletarReserva, getReservasUsuario} from '../controllers/reservasController.js';

import { authenticateToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

    router.post('/', criarReserva);

    router.get('/', buscarReservas);

    router.get("/:id", buscarReservaId);

    router.put('/:id', atualizarReserva);

    router.delete("/:id", deletarReserva);

    router.get('/minhas-reservas', authenticateToken, getReservasUsuario);

    export default router;