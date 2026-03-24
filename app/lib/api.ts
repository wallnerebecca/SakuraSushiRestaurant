import { Restaurant } from './definitions';
import * as restaurant from '../Sakura.json'

export async function fetchRestaurant(url: string): Promise<Restaurant> {
/*  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Unable to load restaurant');
  }

  const result: Restaurant = await response.json();
  return result*/

  return new Promise((resolve, reject) => resolve(restaurant)); // local file for testing  purposes
}