/* eslint-disable */
import axios from 'axios'
import { access } from 'fs';
export const http = axios.create({
 baseURL: 'http://localhost:3000'
})

