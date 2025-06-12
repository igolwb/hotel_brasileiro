import express from 'express';
import { authenticateToken } from '../middlewares/authMiddleware.js';
import {
  buscarClientes,
  buscarClienteId,
  criarCliente,
  atualizarCliente,
  deletarCliente
} from '../controllers/clientesController.js';

const router = express.Router();

router.get('/', authenticateToken, buscarClientes);
router.get('/:id', authenticateToken, buscarClienteId);
router.put('/:id', authenticateToken, atualizarCliente);
router.delete('/:id', authenticateToken, deletarCliente);
router.post('/', criarCliente);

export default router;
