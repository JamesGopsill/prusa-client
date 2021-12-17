export interface GetTelemetryResponse {
    temp_nozzle: number;
    temp_bed: number;
    material: string;
    pos_z_mm: number;
    printing_speed: number;
    flow_factor: number;
}
