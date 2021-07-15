const passExam = () => {
  const getIDFloat = (myID) => parseFloat(document.getElementById(myID).value);
  const getIDCheck = (myID) => document.getElementById(myID).checked;
  const getID = (myID) => document.getElementById(myID);
  const scoreAreaA = 2;
  const scoreAreaB = 1;
  const scoreAreaC = 0.5;
  const scoreObject1 = 2.5;
  const scoreObject2 = 1.5;
  const scoreObject3 = 1;

  //  Area
  let selectedAreaA = getIDCheck("priorityAreaA");
  let selectedAreaB = getIDCheck("priorityAreaB");
  let selectedAreaC = getIDCheck("priorityAreaC");
  let selectedAreaD = getIDCheck("priorityAreaD");
  // Score
  let selectedScore1 = getIDCheck("priorityPoint1");
  let selectedScore2 = getIDCheck("priorityPoint2");
  let selectedScore3 = getIDCheck("priorityPoint3");
  let selectedScore4 = getIDCheck("priorityPoint4");

  let score1 = getIDFloat("score1");
  let score2 = getIDFloat("score2");
  let score3 = getIDFloat("score3");
  let score = score1 + score2 + score3;
  let totalScore = 0;

  if (selectedAreaA == true) {
    switch (selectedAreaA) {
      case selectedScore1:
        totalScore = score + scoreAreaA + scoreObject1;
        getID("showMessage").innerHTML = `Điểm 3 môn là ${totalScore}`;
        break;
      case selectedScore2:
        totalScore = score + scoreAreaA + scoreObject2;
        getID("showMessage").innerHTML = `Điểm 3 môn là ${totalScore}`;
        break;
      case selectedScore3:
        totalScore = score + scoreAreaA + scoreObject3;
        getID("showMessage").innerHTML = `Điểm 3 môn là ${totalScore}`;
        break;
      case selectedScore4:
        totalScore = score + scoreAreaA;
        getID("showMessage").innerHTML = `Điểm 3 môn là ${totalScore}`;
        break;
    }
  } else if (selectedAreaB == true) {
    switch (selectedAreaB) {
      case selectedScore1:
        totalScore = score + scoreAreaB + scoreObject1;
        getID("showMessage").innerHTML = `Điểm 3 môn là ${totalScore}`;
        break;
      case selectedScore2:
        totalScore = score + scoreAreaB + scoreObject2;
        getID("showMessage").innerHTML = `Điểm 3 môn là ${totalScore}`;
        break;
      case selectedScore3:
        totalScore = score + scoreAreaB + scoreObject3;
        getID("showMessage").innerHTML = `Điểm 3 môn là ${totalScore}`;
        break;
      case selectedScore4:
        totalScore = score + scoreAreaB;
        getID("showMessage").innerHTML = `Điểm 3 môn là ${totalScore}`;
        break;
    }
  } else if (selectedAreaC == true) {
    switch (selectedAreaC) {
      case selectedScore1:
        totalScore = score + scoreAreaC + scoreObject1;
        getID("showMessage").innerHTML = `Điểm 3 môn là ${totalScore}`;
        break;
      case selectedScore2:
        totalScore = score + scoreAreaC + scoreObject2;
        getID("showMessage").innerHTML = `Điểm 3 môn là ${totalScore}`;
        break;
      case selectedScore3:
        totalScore = score + scoreAreaC + scoreObject3;
        getID("showMessage").innerHTML = `Điểm 3 môn là ${totalScore}`;
        break;
      case selectedScore4:
        totalScore = score + scoreAreaC;
        getID("showMessage").innerHTML = `Điểm 3 môn là ${totalScore}`;
        break;
    }
  } else if (selectedAreaD == true) {
    switch (selectedAreaD) {
      case selectedScore1:
        totalScore = score + scoreObject1;
        getID("showMessage").innerHTML = `Điểm 3 môn là ${totalScore}`;
        break;
      case selectedScore2:
        totalScore = score + scoreObject2;
        getID("showMessage").innerHTML = `Điểm 3 môn là ${totalScore}`;
        break;
      case selectedScore3:
        totalScore = score + scoreObject3;
        getID("showMessage").innerHTML = `Điểm 3 môn là ${totalScore}`;
        break;
      case selectedScore4:
        totalScore = score;
        getID("showMessage").innerHTML = `Điểm 3 môn là ${totalScore}`;
        break;
    }
  }
};
