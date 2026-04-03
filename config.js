export const VITE_ADMIN_EMAIL = process.env.VITE_ADMIN_EMAIL;
export const VITE_ADMIN_PW = process.env.VITE_ADMIN_PW;
export const DEV = process.env.DEV;
export const BASE_URL =
    DEV === "true"
        ? `http://localhost:3001/api/`
        : `https://antf-band-site-back-production.up.railway.app/api/`;
