import { Request, Response } from 'express';
import { pool } from '../config/db';

export const login = async (req: Request, res: Response) => {
  const { usuario, password } = req.body;

  try {
    const [rows]: any = await pool.query(
      'CALL sp_login(?, ?)',
      [usuario, password]
    );

    res.json(rows[0][0]);
  } catch (error) {
    res.status(500).json({
      ok: 0,
      mensaje: 'Error login'
    });
  }
};
