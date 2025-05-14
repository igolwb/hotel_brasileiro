import { sql } from "../config/db.js";


export const buscarReservas = async (req, res) => {
  try {
    const reservas = await sql`
        SELECT * FROM reservas
        ORDER BY id DESC
        `;

    console.log("reservas: ", reservas);
    res.status(200).json({ success: true, data: reservas });
  } catch (error) {
    console.error("Erro ao buscar reservas: ", error);
    res
      .status(500)
      .json({ success: false, message: "Erro interno no servidor" });
  }
};


export const criarReserva = async (req, res) => {
  const { quarto_id, cliente_id, hospedes, inicio, fim } = req.body;

  // Validação dos dados de entrada
  if (!quarto_id || !cliente_id || !hospedes || !inicio || !fim) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  if (isNaN(quarto_id) || isNaN(cliente_id) || isNaN(hospedes)) {
    return res
      .status(400)
      .json({ error: "IDs e número de hóspedes devem ser números" });
  }

  if (new Date(inicio) >= new Date(fim)) {
    return res
      .status(400)
      .json({ error: "A data de início deve ser anterior à data de fim" });
  }

  try {
    // Passo 1: Verificar disponibilidade
    const disponibilidadeResult = await sql`
      SELECT 
        q.quantidade AS total_quartos,
        COUNT(r.id) AS reservas_no_periodo
      FROM quartos q
      LEFT JOIN reservas r 
        ON r.quarto_id = q.id 
        AND (r.inicio <= ${fim} AND r.fim >= ${inicio})
      WHERE q.id = ${quarto_id}
      GROUP BY q.quantidade;
    `;

    // Verificar se o quarto existe
    if (disponibilidadeResult.length === 0) {
      return res.status(404).json({ error: "Quarto não encontrado" });
    }

    const { total_quartos, reservas_no_periodo } = disponibilidadeResult[0];

    if (reservas_no_periodo >= total_quartos) {
      return res.status(400).json({
        error: "Não há quartos disponíveis para este período",
      });
    }

    // Passo 2: Inserir reserva
    const reservaResult = await sql`
      INSERT INTO reservas 
        (quarto_id, cliente_id, hospedes, inicio, fim)
      VALUES 
        (${quarto_id}, ${cliente_id}, ${hospedes}, ${inicio}, ${fim})
      RETURNING *;
    `;

    res.status(201).json(reservaResult[0]);
  } catch (error) {
    console.error("Erro ao processar a reserva: ", error.message, error.stack);
    res.status(500).json({ error: "Erro ao processar a reserva" });
  }
};


export const buscarReservaId = async (req, res) => {
  const { id } = req.params;

  try {
    const reserva = await sql`
        SELECT * FROM quartos WHERE id = ${id}
        `;

    if (!reservado.length) {
      return res
        .status(404)
        .json({ success: false, message: "Reserva não encontrado" });
    }

    res.status(200).json({ success: true, data: reserva[0] });
  } catch (error) {
    console.error("Erro ao buscar reserva: ", error);
    res
      .status(500)
      .json({ success: false, message: "Erro interno no servidor" });
  }
};

export const atualizarReserva = async (req, res) => {
  const { id } = req.params;
  const { quarto_id, cliente_id, hospedes, inicio, fim } = req.body;

  try {
    const reservaAtualizada = await sql`
        UPDATE reservas
        SET reserva_id = ${quarto_id}, cliente_id = ${cliente_id}, hospedes = ${hospedes}, inicio = ${inicio}, fim = ${fim}
        WHERE id = ${id}
        RETURNING *;
        `;

    if (!reservaAtualizada.length) {
      return res
        .status(404)
        .json({ success: false, message: "Reserva não encontrado" });
    }

    res.status(200).json({ success: true, data: reservasAtualizada[0] });
  } catch (error) {
    console.error("Erro ao atualizar reserva: ", error);
    res
      .status(500)
      .json({ success: false, message: "Erro interno no servidor" });
  }
};

export const deletarReserva = async (req, res) => {
  const { id } = req.params;

  try {
    const reservaDeletada = await sql`
        DELETE FROM reservas WHERE id = ${id}
        RETURNING *;
        `;

    if (!reservaDeletada.length) {
      return res
        .status(404)
        .json({ success: false, message: "Reserva não encontrado" });
    }

    res.status(200).json({
      success: true,
      data: reservaDeletada[0],
    });
  } catch (error) {
    console.error("Erro ao deletar reserva: ", error);
    res
      .status(500)
      .json({ success: false, message: "Erro interno no servidor" });
  }
};