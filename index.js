const names = ['Lisa','Kaitlin', 'Jan'];
function writeCards(names){
  let emptyArray = [];
for(let i = 0; i < names.length; i++){
  emptyArray.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
}
return emptyArray;
};
//writeCards(names)
function countDown(){
  let i = 10; 
  while(i >= 0){
    console.log(i)
    i--
  }
}
//countDown();