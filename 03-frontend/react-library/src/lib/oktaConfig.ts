export const oktaConfig = {
  clientId: "0oaf6q7kak2NCf1UM5d7",
  issuer: "https://dev-40335085.okta.com/oauth2/default",
  redirectUri: "https://localhost:3000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
  useClassicEngine: true, // This is required for the Okta Sign-In Widget to work
};
