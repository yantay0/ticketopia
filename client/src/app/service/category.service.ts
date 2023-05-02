import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/Category";
import {Event} from "../model/Event";
import {AuthToken} from "../model/auth-token";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  BASE_URL = 'http://127.0.0.1:8000'
  constructor(private client: HttpClient) { }

  getCategories():Observable<Category[]>{
    return this.client.get<Category[]>(
      `${this.BASE_URL}/api/categories/`
    );
  }
  getEventsByCategory(categoryId:number): Observable<Event[]> {
    return this.client.get<Event[]>(
      `${this.BASE_URL}/api/categories/${categoryId}/events/`
    );
  }


  createCategory(categoryName: string): Observable<Category> {
    return this.client.post<Category>(
      `${this.BASE_URL}/api/categories/`,
      {name: categoryName}
    );

  }
}
