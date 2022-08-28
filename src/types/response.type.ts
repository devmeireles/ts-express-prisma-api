/**
 * A SuccessReponse type
 * @typedef {object} SuccessReponseType
 * @property {boolean} success - The success status
 * @property {string[]} data - The data
 */
export interface SuccessReponseType {
  success: boolean;
  data: Array<Record<string, any>>;
}

/**
 * A ErrorReponseType type
 * @typedef {object} ErrorReponseType
 * @property {boolean} success - The success status
 * @property {string} message - The error message
 */
export type ErrorReponseType = {
  success: boolean;
  message: string;
};
