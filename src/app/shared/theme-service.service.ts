import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Theme } from './theme.model';

@Injectable({
  providedIn: 'root',
})
export class ThemeServiceService {
  readonly baseURL =
    'https://crudcrud.com/api/89854760d94d451783d28cb1f30178f8/theme';
  constructor(private http: HttpClient) {}

  formData: Theme = new Theme();
  list: Theme[] | undefined;

  getThemeById(id: number) {
    debugger;
   return this.list?.find((item) =>  item.id === id ) as Theme;
  }
  refreshList() {
    this.http
      .get(this.baseURL)
      .toPromise()
      .then((res) => {
        this.list = res as Theme[];
      });
  }
}
