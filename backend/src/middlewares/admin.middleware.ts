import { Request, Response, NextFunction } from 'express';

export const adminOnly = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const rol = 'admin'; // TEMPORAL, luego JWT

  if (rol !== 'admin') {
    return res.status(403).json({
      ok: 0,
      mensaje: 'Acceso solo para administradores'
    });
  }

  next();
};
