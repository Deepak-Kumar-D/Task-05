var securityQuestions = [
 {
 "question": "What was your first pet’s name?",
 "expectedAnswer": "FlufferNutter"
 },
 {
 "question": "What was the model year of your first car?",
 "expectedAnswer": 1985
 },
 {
 "question": "What city were you born in?",
 "expectedAnswer": "NYC"
 }
]
var question="What was your first pet’s ?";
var ans="FlufferNutter";

function chksecurityQuestions(securityQuestions,question,ans) {
    for(var i in securityQuestions)
    {
        if(securityQuestions[i].question===question)
        {
            if(securityQuestions[i].expectedAnswer===ans)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        else
        {
            return false;
        }
    }
}

let result = chksecurityQuestions(securityQuestions, question, ans);
console.log(result);