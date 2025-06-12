import express from 'express';
import { authenticateToken } from '../middlewares/authMiddleware.js';
import {
  buscarQuartos,
  buscarQuartoId,
  criarQuarto,
  atualizarQuarto,
  deletarQuarto
} from '../controllers/quartosController.js';

const router = express.Router();

router.get('/:id', buscarQuartoId);
router.post('/', authenticateToken, criarQuarto);
router.put('/:id', authenticateToken, atualizarQuarto);
router.get('/' , buscarQuartos);
router.delete('/:id', deletarQuarto);

export default router;