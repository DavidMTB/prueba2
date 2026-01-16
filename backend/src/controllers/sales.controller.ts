import { Request, Response } from 'express';
import { pool } from '../config/db';

export const listarVentas = async (_req: Request, res: Response) => {
  try {
    const [rows]: any = await pool.query(
      'CALL sp_listar_ventas()'
    );

    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: 0,
      mensaje: 'Error al listar ventas'
    });
  }
};

export const detalleVenta = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const [rows]: any = await pool.query(
      'CALL sp_detalle_venta(?)',
      [id]
    );

    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: 0,
      mensaje: 'Error detalle venta'
    });
  }
};
