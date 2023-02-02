const config = {
  environment: "local",
  local: {
    API_URL: "http://192.168.112.84:3000/",
  },
  env: (): any => {
    return config.local;
  },
};

export default config;
