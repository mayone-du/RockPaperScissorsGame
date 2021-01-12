(() => {

  const $doc = document;
  const $result = $doc.querySelector(".bl_result");
  const $rockBtn = $doc.querySelector(".bl_rock");
  const $scissorsBtn = $doc.querySelector(".bl_scissors");
  const $paperBtn = $doc.querySelector(".bl_paper");
  const $outputUser = $doc.querySelector(".bl_outputUser");
  const $outputComputer = $doc.querySelector(".bl_outputComputer");

  class RockPaperScissors {
    constructor() {
      this.randNum = "";
    }


    func() {
      this.randNum = Math.floor(Math.random() * Math.floor(3));
    }
    
  }

  const rps = new RockPaperScissors();


  $rockBtn.addEventListener("click", function() {
    $outputUser.textContent = this.textContent;
    rps.func();
    if (rps.randNum === 0) {
      $outputComputer.textContent = "グー";
    } else if (rps.randNum === 1) {
      $outputComputer.textContent = "チョキ";
    } else if (rps.randNum === 2) {
      $outputComputer.textContent = "パー";
    }
  })

  $scissorsBtn.addEventListener("click", function() {
    $outputUser.textContent = this.textContent;
    rps.func();
    if (rps.randNum === 0) {
      $outputComputer.textContent = "グー";
    } else if (rps.randNum === 1) {
      $outputComputer.textContent = "チョキ";
    } else if (rps.randNum === 2) {
      $outputComputer.textContent = "パー";
    }
  })

  $paperBtn.addEventListener("click", function() {
    $outputUser.textContent = this.textContent;
    rps.func();
    if (rps.randNum === 0) {
      $outputComputer.textContent = "グー";
    } else if (rps.randNum === 1) {
      $outputComputer.textContent = "チョキ";
    } else if (rps.randNum === 2) {
      $outputComputer.textContent = "パー";
    }
  })



})();