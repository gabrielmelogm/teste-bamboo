import { Module } from '@nestjs/common';
import { TransactionsModule } from './modules/transaction/transaction.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [TransactionsModule, UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
