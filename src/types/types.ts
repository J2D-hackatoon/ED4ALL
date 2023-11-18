export interface APIResults {
  _id?: string;
  district_name?: string;
  avg_income?: number;
  district_code?: number;
  centers?: string[];
  __v?: number;
}

export interface District {
  avg_income: number;
  centers: number[];
  length: number;
  density_population: number;
  district_code: number;
  district_name: string;
  educational_occupational_ranking: number;
  __v: number;
  _id: string;
}