// code your solution here
function superbowlWin(superbowlResults) {
    for (const result of superbowlResults){
        if (result.results=== "W"){
            return result.year;
        }
    }
   return undefined;
  }
  

