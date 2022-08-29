import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { BaseEntity } from "./base.entity";
import { JWT_SECRET } from "@config/enums";

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

  async compareHash?(unencryptedPassword: string): Promise<boolean> {
    console.log(this.password, unencryptedPassword);
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }

  generateToken?(): string {
    return jwt.sign({ id: this.id, email: this.email }, JWT_SECRET, { expiresIn: "1h" });
  }
}
