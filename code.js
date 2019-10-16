
    var winningNums = [1,7,10,13,19,23,28,31,32,44,49,68,70,79,82,86,91,94,97,100];
    var luckyThree = [];
    var un_lucky = [];
    /*var length = Math.max.apply(Math, winningNums);*/
    var un_lucky17 = [];
    for(let index= 1; index<100; index++){ 
        if(winningNums.indexOf(index) < 0){
            un_lucky.push(index);
        }
    }
    console.log(un_lucky);
    

    function lucky3_selector(list){
         luckyThree = [];
        for(let i= 0; i<3; i++){
            randomNumber = list[Math.floor(Math.random() * (list[list.length-1]))];
            if(luckyThree.includes(randomNumber) == false && randomNumber != undefined){
                luckyThree.push(randomNumber);
            }else{
                return lucky3_selector(list);
            }
    }
    console.log(luckyThree);
    }
    lucky3_selector(winningNums);

    function unlucky17_selector(list){
        un_lucky17= [];
       for(let i= 0; i<17; i++){
           randomNumber = list[Math.floor(Math.random() * (list[list.length-1]))];
           if(un_lucky17.includes(randomNumber) == false && randomNumber != undefined){
                un_lucky17.push(randomNumber);
           }else{
               return unlucky17_selector(list);
           }
   }
   console.log(un_lucky17);
   }
   unlucky17_selector(un_lucky);

   console.log(luckyThree.concat(un_lucky17));

   function generator(array){
       var currentIndex = array.length,temporaryValue,randomIndex;
       //while elements are in the array
       while(currentIndex > 0){
           //pick a random index
           randomIndex = Math.floor(Math.random() * currentIndex);
           //decrease currentIndex by 1
           currentIndex-- ;
           //and swap the last element with it
           temporaryValue = array[currentIndex];
           array[currentIndex] = array[randomIndex];
           array[randomIndex] = temporaryValue;
       }
       document.getElementById('numbers').innerHTML = array.join("  -  ");
   }
     var lottery_array = luckyThree.concat(un_lucky17);
   //generator(lottery_array);
   
    function digitize(number){
        var listOutput = [];
        var num = number.toString();
        var len = num.length;
        for(let index = 0; index < len; index ++){
            listOutput.push(+num.charAt(index));
        }

        var sum = 0;
        i = listOutput.length;
        while(i--){
            sum += Math.pow(listOutput[i], 2);
        }
        if(sum == 1){
            
            document.getElementById('txt').innerHTML = "~~is the Winning Number!!!";
            return sum +" "+  "is the winning number";

        }else if(sum == 4) {
            document.getElementById('txt').innerHTML = "~~is not the Winning Number";
            return sum +" "+ "is not the winning Number";
        }else{
            return digitize(sum);
        }
    }
    

