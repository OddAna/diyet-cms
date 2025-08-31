import path from "path";

export default ({ env }) => {
  const client = env("DATABASE_CLIENT", "sqlite");

  return {
    connection: {
      client,
      connection:
        client === "postgres"
          ? {
              host: env("DATABASE_HOST"),
              port: env.int("DATABASE_PORT", 5432),
              database: env("DATABASE_NAME"),
              user: env("DATABASE_USERNAME"),
              password: env("DATABASE_PASSWORD"),
              ssl: env.bool("DATABASE_SSL", true),
            }
          : {
              filename: path.join(__dirname, "..", env("DATABASE_FILENAME", ".tmp/data.db")),
            },
      useNullAsDefault: client !== "postgres",
    },
  };
};
