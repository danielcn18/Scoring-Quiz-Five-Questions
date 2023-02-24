/* empty array for holding the user's answers */
var userAns = [];
/* the answers in order for the quiz */
var theAns = ["Fried Rice", "Brown", "16", "2006", "Sleep"];
/* all posible answers */

function submit(){
    var e = document.querySelectorAll('input:checked');
    if(e.length == theAns.length){
        /* var posibleAns = [];
        for(let i = 0; i < document.querySelectorAll('input').length; i++){
            posibleAns.push(document.querySelectorAll('input')[i].value);
        } */    

        /* gets rid of any previous choices */
        for(let i=0;i<userAns.length;i++){
            userAns.pop();
        }

        var correct = 0;
        var wrongAns = ``;

        for(let i = 0; i < theAns.length; i++){
            /* if(e.length == theAns.length){ */
                userAns.push(e[i].value);
            /* } */
            /* if(e.length !== theAns.length){
                try{
                    userAns.splice(i, 0, e[i].value);
                    console.log('0');
                } catch(err) {
                    console.log(err);
                    userAns.push('');
                }
            } */
        }

        console.log(userAns);

        for(let i=0;i<theAns.length;i++){
            if(userAns[i] == null){
                console.log("Question"+i+" wrong");
                wrongAns += `<p>❌Q${i+1} Incorrect</p>`; 
            }
            if(userAns[i] == theAns[i]){
                console.log("Question"+i+" right");
                correct++;
            }
            if(userAns[i] != null & userAns[i] != theAns[i]){
                console.log("Question"+i+" wrong");
                wrongAns += `<p>❌Q${i+1} Incorrect</p>`;
            }
        }

        let display = `
        <div class="score">
            <p>Score: ${correct}/${theAns.length}</p>
            ${wrongAns}
        </div>`
        document.getElementById('display').innerHTML = display;
        userAns = [];
        posibleAns = [];
    }
    else{
        let display = `
        <div class="score">
            <p>Answer All Questions Please</p>
        </div>`
        document.getElementById('display').innerHTML = display;
    }
}
