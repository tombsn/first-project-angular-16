import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductRepresentation } from '../models/product-representation';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl: string = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) {}

  getAllProductsWithLimit(
    limit: number = 5
  ): Observable<ProductRepresentation[]> {
    const productsUrl = `${this.baseUrl}products?limit=${limit}`;
    return this.http.get<Array<ProductRepresentation>>(productsUrl);
  }

  createProduct(product: ProductRepresentation): Observable<Object> {
    const productUrl: string = `${this.baseUrl}products`;
    return this.http.post<ProductRepresentation>(productUrl, product);
  }
}
