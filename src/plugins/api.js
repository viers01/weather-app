import axios from 'axios';
import City from '@/api/city';

export const factories = {
    city: City(axios),
};
