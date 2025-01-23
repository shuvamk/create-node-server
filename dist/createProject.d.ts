interface ProjectOptions {
    projectName: string;
    useSentry: boolean;
    useOpenTelemetry: boolean;
    logger: "winston" | "pino" | "none";
}
export declare function createProject(options: ProjectOptions): Promise<string>;
export {};
