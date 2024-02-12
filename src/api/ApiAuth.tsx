'use client'

import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const ApiAuth = axios.create({
    baseURL,
    headers: {
        Accept: 'application/json',
    },
});

export default ApiAuth;