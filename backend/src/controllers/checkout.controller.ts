import { Request, Response } from 'express';
import { pool } from '../config/db';

const USUARIO_ID = 1; // temporal (luego JWT)

export const confirmarCompra = async (_req: Request, res: Response) => {
  try {
    const [rows]: any = await pool.query(
      'CALL sp_confirmar_compra(?)',
      [USUARIO_ID]
    );

    res.json(rows[0][0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: 0,
      mensaje: 'Error al confirmar compra'
    });
  }
};
