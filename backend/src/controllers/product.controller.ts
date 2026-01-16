import { Request, Response } from 'express';
import { pool } from '../config/db';

export const getProducts = async (req: Request, res: Response) => {
  const page = Number(req.query.page) || 1;
  const limit = 6;
  const search = req.query.search ? String(req.query.search) : null;
  const categoria = req.query.categoria ? Number(req.query.categoria) : null;

  try {
    const [rows]: any = await pool.query(
      'CALL sp_listar_productos(?, ?, ?, ?)',
      [page, limit, search, categoria]
    );

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({
      ok: 0,
      mensaje: 'Error obteniendo productos'
    });
  }
};
