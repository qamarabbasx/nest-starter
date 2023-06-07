import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import 'dotenv/config';

async function bootstrap() {
  console.log(process.env.DB_HOST);

  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder().setTitle('nest api with typeorm').setDescription('this is learning').setVersion('1.0').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`)
}
bootstrap();
