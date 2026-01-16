import { Request, Response } from 'express';
import { pool } from '../config/db';

export const addToCart = async (req: Request, res: Response) => {
  const { usuario_id, producto_id, cantidad } = req.body;

  if (!usuario_id || !producto_id || !cantidad) {
    return res.status(400).json({
      ok: 0,
      mensaje: 'Datos incompletos'
    });
  }

  try {
    const [rows]: any = await pool.query(
      'CALL sp_agregar_al_carrito(?, ?, ?)',
      [usuario_id, producto_id, cantidad]
    );

    res.json(rows[0][0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: 0,
      mensaje: 'Error al agregar al carrito'
    });
  }
};

export const getCart = async (req: Request, res: Response) => {
  const { usuario_id } = req.params;

  try {
    const [rows]: any = await pool.query(
      'CALL sp_obtener_carrito(?)',
      [usuario_id]
    );

    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: 0,
      mensaje: 'Error al obtener carrito'
    });
  }
};
