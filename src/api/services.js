import xFetch from './xFetch';
import qs from 'qs';
export async function query(params) {
  return xFetch(`/api/services?${qs.stringify(params)}`);
}
