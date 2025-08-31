export default ({ env }) => ({
  url: env("PUBLIC_URL"), // Strapi Cloud burayı otomatik set eder
  proxy: true,
  app: {
    keys: env.array("APP_KEYS"),
  },
});
