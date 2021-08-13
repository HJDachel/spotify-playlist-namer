export const authEndpoint = "https://accounts.spotify.com/authorize";
export const clientId = "d779dc5edd784e88b97a3cc696fac58d";
export const redirectUri = (process.env.PROD === 1) ? process.env.REDIRECT_URI : "http://localhost:3000/redirect";
export const scopes = [
    "playlist-read-private",
    "playlist-read-collaborative",
    "playlist-modify-private",
    "playlist-modify-public"
];