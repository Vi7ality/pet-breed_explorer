export interface PetInterface {
  id: string;
  name: string;
  image: {
    url: string;
  };
  [key: string]: unknown;
}

export interface IBreedInfo {
  reference_image_id: string;
  name: string;
  description: string;
  origin: string;
  temperament: string;
  breed_group: string;
  life_span: string;
  weight: {
    imperial: string;
    metric: string;
  };
  hypoallergenic?: number;
  intelligence?: number;
  [key: string]: unknown;
}
