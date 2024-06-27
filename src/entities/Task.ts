export class Task {
  constructor(
    public id: number,
    public name: string,
    public description: string | null,
    public status: string,
    public projectId: number
  ) {}
}
