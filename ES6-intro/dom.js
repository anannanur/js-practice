
function getElement(element){
    if(document.getElementsByClassName(element).length != 0){
        console.log(document.getElementsByClassName(element));
        return document.getElementsByClassName(element);
    }
    else{
        console.log(document.getElementById(element))
        return document.getElementById(element);
    }
}

getElement('add-color').addEventListener('click',function(){
    const friends = getElement('friend-name');
    for(const friend of friends){
        friend.style.color = 'red';
    }
})
getElement('add-background').addEventListener('click',function(){
    const friendContainer = getElement('container');
        friendContainer.style.backgroundColor = 'lightblue';
        friendContainer.style.padding = '10px';
  
})
getElement('add-border').addEventListener('click', function(){
    const friendDiv = getElement('friend');
    for(const div of friendDiv){
        div.style.border = '1px solid white';
        div.style.borderRadius = '5px';
        div.style.margin = '10px';
        div.style.padding = '10px';
        div.style.textAlign = 'center';
    }

})