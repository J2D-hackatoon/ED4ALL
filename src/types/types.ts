// /districts
export interface APIResults {
  _id?: string;
  district_name?: string;
  avg_income?: number;
  district_code?: number;
  centers?: string[];
  __v?: number;
}

// centros /districts/id/centers
export interface CenterResults {
  next: Next;
  data: Centro[];
  rowsPerPage: number;
}

export interface Centro {
  _id: string;
  name: string;
  address: string;
  district_code: number;
  addresses_zip_code: string;
  addresses_neighborhood_id: number;
  addresses_neighborhood_name: AddressesNeighborhoodName;
  phone_number: null | string;
  secondary_filters_name: string[];
  latitude: number;
  longitude: number;
  __v: number;
}

export type AddressesNeighborhoodName = 'Sant Pere, Santa Caterina i la Ribera';

export interface Next {
  pageNumber: number;
  limit: number;
}
