import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";

import { BaseEntity } from "./base.entity";

/**
 * A User type
 * @typedef {object} UserEntity
 * @property {string} name.required - The name
 * @property {string} email.required - The email
 * @property {string} password.required - The password
 */
export class UserEntity extends BaseEntity {
  public id?: string;
  public name: string;
  public email: string;
  public password: string;

  constructor(props: UserEntity, id?: string) {
    super(props);

    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }

  async hashPassword?(): Promise<void> {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }
}
