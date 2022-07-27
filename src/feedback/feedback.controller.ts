import {FeedbackService} from "./feedback.service";
import {Body, Controller, Get, Header, HttpCode, HttpStatus, Param, Post} from "@nestjs/common";
import {CreateFeedback} from "./dto/create-feedback.dto";

@Controller('feedbacks')
export class FeedbackController{
    constructor(
        private readonly feedbackService:FeedbackService
    ) {}

    @Get()
    getAllFeedbacks(){
        return this.feedbackService.findAll()
    }

    @Get(':id')
    getOneFeedback(@Param('id')id:string){
        return this.feedbackService.findOne(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Content-Type', 'application/json')
    creatFeedback(@Body()createFeedback:CreateFeedback){
        return this.feedbackService.create(createFeedback)
    }
}