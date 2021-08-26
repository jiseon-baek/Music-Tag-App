const CLIENT_ID = "a7932066ee7b495b09800481f3396382";
const REDIRECT_URL = "http://localhost:3000/auth";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=code`;
