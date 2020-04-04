export interface ISearch<T> {
  page: number;
  results: Array<T>;
  total_pages: number;
  total_results: number;
  dates?: {
    maximum: Date;
    minimum: Date;
  };
}
