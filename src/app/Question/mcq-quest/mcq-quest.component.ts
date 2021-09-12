import { Component, OnInit } from '@angular/core';
import { AuthServices } from 'src/app/Service/auth-services.service';
import { Quiz, QuizzeService } from 'src/app/Service/quizze.service';
@Component({
  selector: 'app-mcq-quest',
  templateUrl: './mcq-quest.component.html',
  styleUrls: ['./mcq-quest.component.css']
})
export class McqQuestComponent implements OnInit {
quizzes: Quiz[]=[];
currentNo = 0;
answerSelected=false;
correctAnswer = 0;
incorrectAnswer = 0;
result = false;
res_ult = false;
options1:any;
options2:any;
options3:any;
options4:any;

finalArrayQuiz = [];

  constructor(private quizServices:QuizzeService, private authService: AuthServices) { }

  ngOnInit(): void {  
    this.quizzes = this.quizServices.getQuizzes();  
  }

  onAnswer(option:boolean, options: string, question:string){
    this.answerSelected=true;
    setTimeout(()=>{
      this.currentNo ++;
      this.answerSelected=false;    
      this.finalArrayQuiz.push({
        question,
        answer:[
          
          this.options1 = this.quizzes[this.currentNo].answer[0].option,
          this.options2 = this.quizzes[this.currentNo].answer[1].option,
          this.options3 = this.quizzes[this.currentNo].answer[2].option,
          this.options4 = this.quizzes[this.currentNo].answer[3].option,
        ], 
        correctOption: options
      });
    },2000);

    if(option){
      this.correctAnswer ++;
    }else{
      this.incorrectAnswer ++;
    }
  }

  showResult(){
    let postArray = [{name : this.authService.loggedIn(),correctMarks:this.correctAnswer,answer:this.finalArrayQuiz}]
    this.authService.postQuiz(postArray).subscribe(response=>{
      if(response['success']){
        this.result=true;
      }else{
        this.result = false;
        this.res_ult = true;
      }
    })
  }
}
