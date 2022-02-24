document.getElementById('add-color').addEventListener('click',function(){
    const friends = document.getElementsByClassName('friend-name');
    for(const friend of friends){
        friend.style.color = 'red';
    }
})
document.getElementById('add-background').addEventListener('click',function(){
    const friendDiv = document.getElementsByClassName('friend');
    console.log(friendDiv);
    for(const div of friendDiv){
        console.log(div);
        div.style.backgroundColor = 'lightblue';
        div.style.padding = '10px';
    }
})