import { Module } from '@nestjs/common';
import { SskModule } from './sasaki-admin/ssk.module';
import { WoaijiModule } from './woaiji-miniprogram/woaiji.module';

@Module({
  imports: [SskModule, WoaijiModule],
})
export class AppModule {}
