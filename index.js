// code your solution here
function superbowlWin(record) {
    const win = record.find(result => result.result === "W");//&& game.team === "Denver Broncos");
   return win ? win.year : undefined;
  }
  

