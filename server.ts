import "reflect-metadata";
import { env } from "./config/env";
import { AppDataSource } from "./database/data-source";
import { createApp } from "./app";

async function bootstrap() {
  await AppDataSource.initialize();

  const app = createApp();
  app.listen(env.PORT, () => {
    console.log(`CivicSphere API ouvindo na porta ${env.PORT}`);
  });
}

bootstrap().catch((err) => {
  console.error("Falha ao iniciar a aplicação:", err);
  process.exit(1);
});
