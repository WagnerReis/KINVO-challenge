export default interface IRepository<T> {
  create(entity: T): Promise<T>;
  update(entity: T): Promise<T>;
  findById(id: string): Promise<T | null>;
  findAll(): Promise<T[]>;
}
