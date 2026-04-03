export const VITE_ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;
export const VITE_ADMIN_PW = import.meta.env.VITE_ADMIN_PW;
export const VITE_DEV = import.meta.env.VITE_DEV;
export const BASE_URL =
    VITE_DEV === 'true'
        ? `http://localhost:3001/api/`
        : `https://antf-band-site-back-production.up.railway.app/api/`;
