(() => {

  const $doc = document;
  const $result = $doc.querySelector(".bl_result");
  const $btns = $doc.querySelectorAll(".bl_btn");
  const $outputUser = $doc.querySelector(".bl_outputUser");
  const $outputComputer = $doc.querySelector(".bl_outputComputer");

  class RockPaperScissors {
    constructor() {
      this.randNum = "";
    }

    getRandNum() {
      this.randNum = Math.floor(Math.random() * Math.floor(3));
      return this;
    }

    judg() {
      if (rps.randNum === 0) {
        $outputComputer.textContent = "グー";
      } else if (rps.randNum === 1) {
        $outputComputer.textContent = "チョキ";
      } else if (rps.randNum === 2) {
        $outputComputer.textContent = "パー";
      }
      return this;
    }

    compare() {
      if ($outputUser.textContent === $outputComputer.textContent) {
        $result.textContent = "あいこ";
        // グーを押したときの処理
      } else if ($outputUser.textContent === "グー" && $outputComputer.textContent === "チョキ") {
        $result.textContent = "win!";
      } else if ($outputUser.textContent === "グー" && $outputComputer.textContent === "パー") {
        $result.textContent = "lose...";
        // チョキを押したときの処理
      } else if ($outputUser.textContent === "チョキ" && $outputComputer.textContent === "パー") {
        $result.textContent = "win!";
      } else if ($outputUser.textContent === "チョキ" && $outputComputer.textContent === "グー") {
        $result.textContent = "lose...";
        // パーを押したときの処理
      } else if ($outputUser.textContent === "パー" && $outputComputer.textContent === "グー") {
        $result.textContent = "win!";
      } else if ($outputUser.textContent === "パー" && $outputComputer.textContent === "チョキ") {
        $result.textContent = "lose...";
      }
      return this;
    }

  }

  const rps = new RockPaperScissors();

  $btns.forEach(btn => {
    btn.addEventListener("click", function() {
      $outputUser.textContent = this.textContent;
      rps.getRandNum().judg().compare();
    })
  })


})();