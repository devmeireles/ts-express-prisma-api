import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "@config/enums";

const checkJWT = (
  req: Request,
  res: Response,
  next: NextFunction
): NextFunction => {
  const token = req.headers["authorization"].replace('Bearer ', '');

  let jwtPayload;

  try {
    jwtPayload = jwt.verify(token, JWT_SECRET);
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    res.status(401).send({
      success: false,
      message: error,
    });
    return;
  }

  const { id, email } = jwtPayload;
  const newToken = jwt.sign({ id, email }, JWT_SECRET, {
    expiresIn: "1h",
  });

  res.setHeader("token", newToken);

  next();
};

export default checkJWT;
