import { Response } from "express";
import { RESPONSE_TYPES } from "@config/enums";

type Props = {
  res: Response;
  data?: Record<string, any>;
  message?: string | TypeError;
  type: RESPONSE_TYPES;
  statusCode?: number;
};

export class BaseController {
  public async formatReponse(props: Props) {
    const { res, data, message, type, statusCode } = props;

    if (type === RESPONSE_TYPES.SUCCESS) {
      return res.status(statusCode || 200).json({
        success: true,
        data,
      });
    } else {
      console.log(typeof message, message.toString());
      // const formatedMessage =
      //   message instanceof TypeError
      //     ? message.cause || message.message
      //     : message;

      return res.status(statusCode || 400).json({
        success: false,
        message: message.toString(),
      });
    }
  }
}
