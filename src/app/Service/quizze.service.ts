import { Injectable } from '@angular/core';

export class Quiz{
question:string;
answer:{ option: string, correct: boolean}[];
}

@Injectable({
  providedIn: 'root'
})
export class QuizzeService {

  quizzes : Quiz[]= [
    {
      question:'who is the first president of India',
      answer:[
      {
        option:'Jawaharlal Nehru ji',
        correct:false
      },
      {
        option:'Dr. Rajendra prasad',
        correct:true
      },
      {
        option:'Babasaheb Ambedkar',
        correct:false
      },
      {
        option:'Mahatma Gandhi',
        correct:false
      }
    ]
    },

    {
      question:'Who wrote constitution of India',
      answer:[
      {
        option:'Jawaharlal Nehru ji',
        correct:false
      },
      {
        option:'Dr. Rajendra prasad',
        correct:false
      },
      {
        option:'Babasaheb Ambedkar',
        correct:true
      },
      {
        option:'Mahatma Gandhi',
        correct:false
      }
    ]
    },

    {
      question:'Who invented Telephone',
      answer:[
      {
        option:'Grahm Bell',
        correct:true
      },
      {
        option:'Newton',
        correct:false
      },
      {
        option:'CV Raman',
        correct:false
      },
      {
        option:'Sarojni Naidu',
        correct:false
      }
    ]
    },

    {
      question:'Which one of the following salts does not con-tain water of crystallisation?',
      answer:[
      {
        option:'Blue vitriol',
        correct:false
      },
      {
        option:'Baking soda',
        correct:true
      },
      {
        option:'Washing soda',
        correct:false
      },
      {
        option:'Gypsum',
        correct:false
      }
    ]
    },

    {
      question:'Tomato is a natural source of which acid?',
      answer:[
      {
        option:' Acetic acid',
        correct:false
      },
      {
        option:'Citric acid',
        correct:false
      },
      {
        option:'Tartaric acid',
        correct:false
      },
      {
        option:'Oxalic acid',
        correct:true
      }
    ]
    },

    {
      question:'Na2CO3 . 10H2O is',
      answer:[
      {
        option:'washing soda',
        correct:true
      },
      {
        option:'baking soda',
        correct:false
      },
      {
        option:'bleaching powder',
        correct:false
      },
      {
        option:'tartaric acid',
        correct:false
      }
    ]
    },

    {
      question:'At what temperature is gypsum heated to form Plaster of Paris?',
      answer:[
      {
        option:'90°C',
        correct:false
      },
      {
        option:'100°C',
        correct:true
      },
      {
        option:'110°C',
        correct:false
      },
      {
        option:'120°C',
        correct:false
      }
    ]
    },

    {
      question:'How many water molecules does hydrated cal-cium sulphate contain?',
      answer:[
      {
        option:'5',
        correct:false
      },
      {
        option:'10',
        correct:false
      },
      {
        option:'7',
        correct:false
      },
      {
        option:'2',
        correct:true
      }
    ]
    },
    
    {
      question:'Inside the magnet, the field lines moves',
      answer:[
      {
        option:'from north to south',
        correct:true
      },
      {
        option:'from south the north',
        correct:false
      },
      {
        option:'away from south pole',
        correct:false
      },
      {
        option:'away from north pole',
        correct:false
      }
    ]
    },
    
    {
      question:'By which instrument, the presence of magnetic field be determined?',
      answer:[
      {
        option:'Magnetic Needle',
        correct:false
      },
      {
        option:'Ammeter',
        correct:false
      },
      {
        option:'Galvanometer',
        correct:false
      },
      {
        option:'Voltmeter',
        correct:true
      }
    ]
    },
  ]
  constructor() { }

  getQuizzes(){
    return this.quizzes
  }
}
