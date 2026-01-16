import { Request, Response } from 'express';
import { pool } from '../config/db';
import bcrypt from 'bcrypt';

export const register = async (req: Request, res: Response) => {
  const { usuario, password } = req.body;

  if (!usuario || !password) {
    return res.status(400).json({ mensaje: 'Datos incompletos' });
  }

  try {
    const hash = await bcrypt.hash(password, 10);

    await pool.query(
      'INSERT INTO usuarios (usuario, password, rol) VALUES (?, ?, ?)',
      [usuario, hash, 'user']
    );

    res.json({ mensaje: 'Usuario registrado correctamente' });

  } catch (error: any) {
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ mensaje: 'Usuario ya existe' });
    }

    res.status(500).json({ mensaje: 'Error al registrar usuario' });
  }
};
