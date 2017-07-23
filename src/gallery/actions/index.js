import { FETCH_GALLERIES } from './types';
import axios from 'axios';


export function fetchGalleries() {

    const request = axios.get('https://www.holidu.de/rest/search?regionId=22458');

    return {
        type: FETCH_GALLERIES,
        payload: request
    };
}