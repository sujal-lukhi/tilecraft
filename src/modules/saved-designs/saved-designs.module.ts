import { Module } from '@nestjs/common';
import { SavedDesignsService } from './saved-designs.service';
import { SavedDesignsController } from './saved-designs.controller';

@Module({
  controllers: [SavedDesignsController],
  providers: [SavedDesignsService],
  exports: [SavedDesignsService],
})
export class SavedDesignsModule {}
