export class BaseEntity {
  public readonly id!: string;
  public created_at!: string;
  public updated_at!: string;

  constructor(props: BaseEntity, id?: string) {
    Object.assign(this, props);
  }
}
