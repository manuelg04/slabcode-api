import { Project } from "../entities/Project";

export interface IProjectService {
    createProject(
        name: string,
        description: string,
        userId: number
    ): Promise<Project>;
    updateProject(
        id: number,
        name: string,
        description: string
    ): Promise<Project>;
    deleteProject(id: number): Promise<void>;
    completeProject(id: number): Promise<Project>;
}
