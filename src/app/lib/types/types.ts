export interface PetInterface {
  id: string;
  name: string;
  image: {
    url: string;
  };
  [key: string]: unknown;
}
