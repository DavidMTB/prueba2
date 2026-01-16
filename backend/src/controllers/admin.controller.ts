import { Request, Response } from 'express';
import { pool } from '../config/db';

export const dashboard = async (_req: Request, res: Response) => {
  try {
    const [rows]: any = await pool.query(
      'CALL sp_admin_dashboard()'
    );

    // rows[0][0] porque MySQL devuelve arrays anidados en SP
    res.json(rows[0][0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: 0,
      mensaje: 'Error dashboard admin'
    });
  }
};
