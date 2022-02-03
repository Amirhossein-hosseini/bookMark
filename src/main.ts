import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
const PORT = parseInt(process.env.SERVER_PORT, 10) || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/v1/api')

  const config = new DocumentBuilder()
  .setTitle('Blog example')
  .setDescription('The Blog API description')
  .setVersion('1.0.0')
  .addTag('Blog')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('docs', app, document);


// app.enableCors({
//   origin: 'http://localhost:4200'
// })
await app.listen(PORT);
}
bootstrap();
