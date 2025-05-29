import { sql } from "../config/db.js";

export const buscarClientes = async(req, res) => {
    try {
        const clientes = await sql `
        SELECT * FROM clientes
        ORDER BY id DESC
        `;

        console.log('[GET /clientes] Clientes encontrados:', clientes);
        res.status(200).json({success: true , data: clientes});

    } catch (error) {
        console.error('[GET /clientes] Erro na função buscarClientes:', error);
        res.status(500).json({ success: false, message: 'Erro interno no servidor' });
    }
};

export const criarCliente = async(req, res) => {
    const {nome, email, telefone, senha} = req.body

    if(!nome || !email || !telefone || !senha){
        console.warn('[POST /clientes] Campos obrigatórios não preenchidos:', req.body);
        return res.status(400).json({success: false, message: 'Preencha todos os campos!'})
    }

    try {
        const novoCliente = await sql `
        INSERT INTO clientes (nome, telefone, email, senha)
        VALUES (${nome}, ${telefone}, ${email}, ${senha})
        RETURNING *;
        `
        console.log('[POST /clientes] Novo cliente criado:', novoCliente);
        res.status(201).json({ success: true, data: novoCliente[0] });

    } catch (error) {
        console.error('[POST /clientes] Erro na função criarCliente:', error);
        res.status(500).json({ success: false, message: 'Erro interno no servidor' });
    }
};

export const buscarClienteId = async(req, res) => {
    const { id } = req.params;

    try {
        const cliente = await sql `
        SELECT * FROM clientes WHERE id =${id}
        `
        console.log(`[GET /clientes/${id}] Cliente encontrado:`, cliente[0]);
        res.status(200).json({ success: true, data: cliente[0] });
    } catch (error) {
        console.error(`[GET /clientes/${id}] Erro na função buscarClienteId:`, error);
        res.status(500).json({ success: false, message: 'Erro interno no servidor' });
    }
};

export const atualizarCliente = async(req, res) => {
    const { id } = req.params;
    const { nome , email, telefone, senha } = req.body;

    try {
        const clienteAtualizado = await sql `
        UPDATE  clientes SET nome = ${nome}, email = ${email}, telefone = ${telefone}, senha = ${senha}
        WHERE id = ${id} 
        RETURNING *
        `

        if(clienteAtualizado.length === 0){
            console.warn(`[PUT /clientes/${id}] Cliente não encontrado para atualização.`);
            return res.status(404).json({success: false, message: 'Cliente não encontrado'})
        }

        console.log(`[PUT /clientes/${id}] Cliente atualizado:`, clienteAtualizado[0]);
        res.status(200).json({ success: true, data: clienteAtualizado[0] });
        
    } catch (error) {
        console.error(`[PUT /clientes/${id}] Erro na função atualizarCliente:`, error);
        res.status(500).json({ success: false, message: 'Erro interno no servidor' });
    }
};

export const deletarCliente = async(req, res) => {
    const { id } = req.params;

    try {
        const clienteDeletado = await sql `
        DELETE FROM clientes WHERE id = ${id}
        RETURNING *;
        `

        if(clienteDeletado.length === 0){
            console.warn(`[DELETE /clientes/${id}] Cliente não encontrado para exclusão.`);
            return res.status(404).json({success: false, message: 'cliente não encontrado'})
        }

        console.log(`[DELETE /clientes/${id}] Cliente deletado:`, clienteDeletado[0]);
        res.status(200).json({ 
            success: true, 
            data: clienteDeletado[0] 
        });
        
    } catch (error) {
        console.error(`[DELETE /clientes/${id}] Erro na função deletarCliente:`, error);
        res.status(500).json({ success: false, message: 'Erro interno no servidor' });
        
    }

};