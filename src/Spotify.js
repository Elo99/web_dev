const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "4f68ec9de3954aa9a5ef23d28d302c34";
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "play-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`
