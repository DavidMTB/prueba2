import { Request, Response } from 'express';
import { AuthRequest } from '../middlewares/auth.middleware'; // ✅ Importar AuthRequest
import { pool } from '../config/db';

export const addToCart = async (req: AuthRequest, res: Response) => {
  // ✅ USAR EL ID DEL USUARIO LOGEADO (DEL TOKEN)
  const usuario_id = req.user?.id; 
  const { producto_id, cantidad } = req.body;

  if (!usuario_id || !producto_id || !cantidad) {
    return res.status(400).json({ ok: 0, mensaje: 'Datos incompletos' });
  }

  try {
    const [rows]: any = await pool.query(
      'CALL sp_agregar_al_carrito(?, ?, ?)',
      [usuario_id, producto_id, cantidad]
    );
    res.json(rows[0][0]);
  } catch (error: any) {
    console.error('Error en SP:', error.sqlMessage || error.message); // ✅ Mostrar error real
    res.status(500).json({
      ok: 0,
      mensaje: error.sqlMessage || 'Error al agregar al carrito'
    });
  }
};

export const getCart = async (req: AuthRequest, res: Response) => {
  // ✅ SOLO EL USUARIO LOGEADO PUEDE VER SU CARRITO
  const usuario_id = req.user?.id; 

  try {
    const [rows]: any = await pool.query(
      'CALL sp_obtener_carrito(?)',
      [usuario_id]
    );
    res.json(rows[0]);
  } catch (error: any) {
    console.error('Error en SP:', error.sqlMessage || error.message);
    res.status(500).json({
      ok: 0,
      mensaje: error.sqlMessage || 'Error al obtener carrito'
    });
  }
};