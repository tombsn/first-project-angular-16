import { RatingRepresentation } from './rating-representation';

export interface ProductRepresentation {
  id?: number;
  title?: string;
  category?: string;
  description?: string;
  image?: string;
  price?: number;
  rating?: RatingRepresentation;
}
