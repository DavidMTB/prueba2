import { Request, Response } from 'express';
import { pool } from '../config/db';

export const getCategories = async (_req: Request, res: Response) => {
  try {
    const [rows]: any = await pool.query('CALL sp_listar_categorias()');
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({
      ok: 0,
      mensaje: 'Error obteniendo categorías'
    });
  }
};
