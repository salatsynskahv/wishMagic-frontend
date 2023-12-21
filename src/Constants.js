const prod = {
  url: {
    API_BASE_URL: 'https://wishmagic-backend.railway.internal',
    OAUTH2_REDIRECT_URI: 'https://wishmagic-backend.railway.internal/oauth2/redirect'
  }
}

const dev = {
  url: {
    API_BASE_URL: 'http://localhost:8080',
    OAUTH2_REDIRECT_URI: 'http://localhost:3000/oauth2/redirect'
  }
}

export const config = prod