import { Request, Response, NextFunction } from "express";

export const validateId = (req: Request, res: Response, next: NextFunction) => {
    if (req.params.id) {
        if (isNaN(parseInt(req.params.id, 10))) {
            res.status(400).json({ error: 'Invalid ID. It must be an integer.' });
            return;
        }
        req.params.id = parseInt(req.params.id, 10).toString();
    }
    next();
};