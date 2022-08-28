import { BaseEntity } from "./base.entity";

export class UserEntity extends BaseEntity {
  public name!: string;
  public email!: string;

  // constructor (props: UserEntity, id?: string) {
  //     Object.assign(this, props);
  // }
}
