export class BaseEntity {
  public created_at!: number;
  public updated_at!: number;

  constructor(props: BaseEntity) {
    Object.assign(this, props);
  }
}
