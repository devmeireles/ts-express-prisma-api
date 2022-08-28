import { Response } from "express";
import { RESPONSE_TYPES } from "@config/enums";

type Props = {
  res: Response;
  data?: Record<string, any>;
  message?: string | TypeError;
  type: RESPONSE_TYPES;
};

export class BaseController {
  public async formatReponse(props: Props) {
    const { res, data, message, type } = props;

    if (type === RESPONSE_TYPES.SUCCESS) {
      return res.status(200).json({
        success: false,
        data,
      });
    } else {
      const formatedMessage =
        message instanceof TypeError
          ? message.cause || message.message
          : message;

      return res.status(400).json({
        success: false,
        message: formatedMessage,
      });
    }
  }
}
