import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/app.module';

@Module({
  imports: [UserModule],
})
export class AppModule {}
