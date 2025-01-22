export interface ICountry {
  flags: IFlags;
  name: IName;
  capital: string[];
  region: string;
  subregion: string;
  population: number;
  tld: string[];
  currencies: { [key: string]: { symbol: string } };
  languages: { [key: string]: string };
  borders: string[];
}

interface IFlags {
  png: string;
  svg: string;
  alt: string;
}

interface IName {
  common: string;
  official: string;
  nativeName: { [key: string]: INativeName };
}

interface INativeName {
  official: string;
  common: string;
}
