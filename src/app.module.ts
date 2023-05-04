import { Module } from '@nestjs/common';
import { SskModule } from './sasaki-admin/ssk.module';
import { WoaijiModule } from './woaiji-miniprogram/woaiji.module';
// 引入 Mongoose 操作MongoDB
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    SskModule,
    WoaijiModule,
    MongooseModule.forRoot(
      'mongodb://root:41tqXcqDljUExnVh@47.108.207.76:27000',
      { dbName: 'ssk' },
    ),
  ],
})
export class AppModule {}
