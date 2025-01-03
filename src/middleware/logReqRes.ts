import { NextFunction, Request, Response } from "express";
import logger from "../logger";
/**
 * Logs the basic information like request method
 * with their respective url & the response of the request
 *
 */
export function logReqRes(req: Request, res: Response, next: NextFunction) {
  logger.info(`[REQ] ${req.method} ${req.originalUrl}`);

  res.on("finish", () => {
    const msg = `[RES] ${res.statusCode} ${res.statusMessage}`;

    if (res.statusCode < 300) {
      logger.success(msg);
    } else if (res.statusCode < 400) {
      logger.warn(msg);
    } else {
      logger.error(msg);
    }
  });
  next();
}
