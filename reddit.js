function upvote(){
    let votes = document.getElementById('votes');
    let count = parseInt(votes.innerHTML);
    count++;
    votes.innerHTML=count;
}
function downvote(){
    let votes = document.getElementById('votes');
    let count = parseInt(votes.innerHTML);
    count--;
    votes.innerHTML= count;
}