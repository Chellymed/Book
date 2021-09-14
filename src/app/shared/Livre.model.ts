import { ThemeServiceService } from './theme-service.service';

export class Livre {
  _id: string = '';
  nom: string = '';
  Date: Date = new Date();
  Theme: number = 0;
  SousTheme: number = 0;
  ThemeName: string = '';
  SousThemeName: string = '';
}
