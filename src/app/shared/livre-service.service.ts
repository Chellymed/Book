import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Livre } from './Livre.model';
import { ThemeServiceService } from './theme-service.service';
import { SousThemeService } from './sous-theme.service';

@Injectable({
  providedIn: 'root',
})
export class LivreServiceService {
  optionRequete = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    }),
  };
  readonly baseURL =
    'https://crudcrud.com/api/89854760d94d451783d28cb1f30178f8/livre';
  constructor(
    private http: HttpClient,
    public themeService: ThemeServiceService,
    public sousThemeService: SousThemeService
  ) {}

  formData: Livre = new Livre();
  list: Livre[] | undefined;

  postLivre() {
    return this.http.post(this.baseURL, this.formData);
  }
  putLivre() {
    return this.http.put(`${this.baseURL}/${this.formData._id}`, this.formData);
  }
  deleteLivre(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.themeService.refreshList();
    this.sousThemeService.refreshList();
    this.http
      .get(this.baseURL, this.optionRequete)
      .toPromise()
      .then((res) => {
        this.list = res as Livre[];
        this.list.forEach((livre) => {
          livre.ThemeName = this.themeService.getThemeById(livre.Theme)?.name;
          livre.SousThemeName = this.sousThemeService.getSousThemeById(
            livre.SousTheme
          )?.name;
        });
      });
  }
}
