import {Injectable} from "@nestjs/common";
import {Feedback} from "./models/feedback.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateFeedback} from "./dto/create-feedback.dto";

@Injectable()
export class FeedbackService{
    constructor(
    @InjectModel(Feedback)
    private FeedbackModel: typeof Feedback
    ){}

    async findAll():Promise<Feedback[]>{
        return this.FeedbackModel.findAll()
    }
    async findOne(id:string):Promise<Feedback>{
        return this.FeedbackModel.findOne({
            where:{
                id
            }
        })
    }

    create(createFeedback:CreateFeedback):Promise<Feedback>{
        const feedback = new Feedback()
        feedback.name = createFeedback.name
        feedback.email = createFeedback.email
        feedback.message = createFeedback.message

        return feedback.save()
    }

}

