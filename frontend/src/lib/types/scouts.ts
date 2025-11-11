export interface ScoutBase {
  name: string;
  email: string;
  regions: string[];
  trackedPlayerIds: string[];
}

export interface Scout extends ScoutBase {
  id: string;
}

export type CreateScoutPayload = Partial<Pick<Scout, "id">> & ScoutBase;

export type UpdateScoutPayload = ScoutBase;

