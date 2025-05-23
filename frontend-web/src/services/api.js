import { create } from 'zustand';
import axios from 'axios';

const URL = 'http://localhost:3000'; // Adjust this URL to your API endpoint

const useApiStore = create((set) => ({
  clientes: [],
  quartos: [],
  reservas: [],
  loading: false,
  error: null,

  fetchClientes: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${URL}/api/clientes`);
      set({ clientes: response.data.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  fetchQuartos: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${URL}/api/quartos`);
      set({ quartos: response.data.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  fetchReservas: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${URL}/api/reservas`);
      set({ reservas: response.data.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  createCliente: async (cliente) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post('/api/clientes', cliente);
      set((state) => ({ clientes: [...state.clientes, response.data], loading: false }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  createQuarto: async (quarto) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post('/api/quartos', quarto);
      set((state) => ({ quartos: [...state.quartos, response.data], loading: false }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  createReserva: async (reserva) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post('/api/reservas', reserva);
      set((state) => ({ reservas: [...state.reservas, response.data], loading: false }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  updateCliente: async (id, updatedCliente) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.put(`/api/clientes/${id}`, updatedCliente);
      set((state) => ({
        clientes: state.clientes.map((cliente) =>
          cliente.id === id ? response.data : cliente
        ),
        loading: false,
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  deleteCliente: async (id) => {
    set({ loading: true, error: null });
    try {
      await axios.delete(`/api/clientes/${id}`);
      set((state) => ({
        clientes: state.clientes.filter((cliente) => cliente.id !== id),
        loading: false,
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  getClienteById: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`/api/clientes/${id}`);
      set({ loading: false });
      return response.data;
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  updateQuarto: async (id, updatedQuarto) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.put(`/api/quartos/${id}`, updatedQuarto);
      set((state) => ({
        quartos: state.quartos.map((quarto) =>
          quarto.id === id ? response.data : quarto
        ),
        loading: false,
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  deleteQuarto: async (id) => {
    set({ loading: true, error: null });
    try {
      await axios.delete(`/api/quartos/${id}`);
      set((state) => ({
        quartos: state.quartos.filter((quarto) => quarto.id !== id),
        loading: false,
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  getQuartoById: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`/api/quartos/${id}`);
      set({ loading: false });
      return response.data;
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  updateReserva: async (id, updatedReserva) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.put(`/api/reservas/${id}`, updatedReserva);
      set((state) => ({
        reservas: state.reservas.map((reserva) =>
          reserva.id === id ? response.data : reserva
        ),
        loading: false,
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  deleteReserva: async (id) => {
    set({ loading: true, error: null });
    try {
      await axios.delete(`/api/reservas/${id}`);
      set((state) => ({
        reservas: state.reservas.filter((reserva) => reserva.id !== id),
        loading: false,
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  getReservaById: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`/api/reservas/${id}`);
      set({ loading: false });
      return response.data;
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useApiStore;