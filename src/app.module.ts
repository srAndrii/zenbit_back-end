import { Module } from '@nestjs/common';
import {FeedbackModule} from "./feedback/feedback.module";
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config";
import {SequelizeConfigServise} from "./config/sequelizeConfig.servise";
import {databaseConfig} from "./config/configuration";

@Module({
  imports: [
      SequelizeModule.forRootAsync({
        imports:[ConfigModule],
        useClass:SequelizeConfigServise
      }),
      ConfigModule.forRoot({
        load:[databaseConfig]
      }),
      FeedbackModule
  ],
})
export class AppModule {}
