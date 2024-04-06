/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { CategoriasFixture } from './fixtures/categorias.fixture';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const categoriasFixture = app.get(CategoriasFixture);
  await categoriasFixture.createCategorias();
  
  const config = new DocumentBuilder()
    .setTitle('Nest Challenge - Products')
    .setDescription('Implement endpoints of products and categories')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  

  await app.listen(3000);
}
bootstrap();
