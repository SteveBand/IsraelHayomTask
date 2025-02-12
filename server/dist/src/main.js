"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const seeder_service_1 = require("./seeder/seeder.service");
async function bootstrap() {
    const corsConfig = {
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
        origin: true,
    };
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: corsConfig });
    const seedService = app.get(seeder_service_1.SeedService);
    await seedService.seedData();
    await app.listen(process.env.PORT ?? 3006);
}
bootstrap();
//# sourceMappingURL=main.js.map