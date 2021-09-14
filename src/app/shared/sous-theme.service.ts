import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SousTheme } from './sous-theme.model';

@Injectable({
  providedIn: 'root'
})
export class SousThemeService {

  readonly baseURL =
    'https://crudcrud.com/api/89854760d94d451783d28cb1f30178f8/soustheme';
  constructor(private http: HttpClient) {}

  formData: SousTheme = new SousTheme();
  list: SousTheme[] | undefined;

  getSousThemeById(id: number) {
    debugger;
   return this.list?.find((item) =>  item.id === id ) as SousTheme;
  }
  refreshList() {
    this.http
      .get(this.baseURL)
      .toPromise()
      .then((res) => {
        this.list = res as SousTheme[];
      });
  }
}
