import { BaseEntity } from "./base.entity";

/**
 * A User type
 * @typedef {object} UserEntity
 * @property {string} name.required - The name
 * @property {string} email.required - The email
 */
export class UserEntity extends BaseEntity {
  public name: string;
  public email: string;

  constructor(props: UserEntity, id?: string) {
    super(props);
    Object.assign(this, props);
  }
}
