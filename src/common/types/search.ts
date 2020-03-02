export interface ISearch<T> {
  page: number;
  results: Array<T>;
  total_results: number;
  total_pages: number;
}
