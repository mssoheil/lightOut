import * as React from "react";
// styles
import "./index.scss";
function reducer(state, action) {
  return { ...state, ...action };
}
const LightOut = () => {
  const initialState = () => ({
    randomArray: Array(25).fill(false)
  });
  const [state, dispatch] = React.useReducer(reducer, initialState());

  React.useEffect(() => {
    randomActive();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function randomActive() {
    const tempArr = state.randomArray;

    const finalArray = tempArr.map((item, index) => {
      return index + 1 === Math.floor(Math.random() * 25) ? true : false;
    });

    if (finalArray.indexOf(true) === -1) {
      const temp = finalArray;
      temp[0] = true;
      temp[1] = true;
      dispatch({ randomArray: temp });
    } else {
      dispatch({ randomArray: finalArray });
    }
  }

  function changeActiveStates(index) {
    const tempArr = state.randomArray;
    tempArr[index - 1] = !tempArr[index - 1];
    if (index % 5 === 0) {
      if (index === 5) {
        tempArr[index - 2] = !tempArr[index - 2];
        tempArr[index + 4] = !tempArr[index + 4];
      } else {
        tempArr[index - 2] = !tempArr[index - 2];
        tempArr[index + 4] = !tempArr[index + 4];
      }
    } else if (index === 1) {
      tempArr[index] = !tempArr[index];
      tempArr[index + 4] = !tempArr[index + 4];
    } else if (index === 21) {
      tempArr[index] = !tempArr[index];
    } else if ((index - 1) % 5 === 0) {
      tempArr[index] = !tempArr[index];
      tempArr[index - 6] = !tempArr[index - 6];
      tempArr[index + 4] = !tempArr[index + 4];
    } else {
      tempArr[index - 2] = !tempArr[index - 2];
      tempArr[index] = !tempArr[index];
      tempArr[index - 6] = !tempArr[index - 6];
      if (index + 4 < tempArr.length) {
        tempArr[index + 4] = !tempArr[index + 4];
      }
    }

    if (tempArr.indexOf(true) === -1) {
      window.alert("You won");
    }

    dispatch({ randomArray: tempArr });
  }
  return (
    <div className="lightOut">
      <div className="inner-wrapper">
        {state.randomArray.map((item, index) => {
          if ((index + 1) % 5 === 0) {
            return (
              <React.Fragment key={`item_${index}`}>
                <span
                  onClick={() => changeActiveStates(index + 1)}
                  className={`lightOut__item ${item ? "active" : ""}`}
                ></span>
                <br />
              </React.Fragment>
            );
          } else {
            return (
              <span
                onClick={() => changeActiveStates(index + 1)}
                className={`lightOut__item ${item ? "active" : ""}`}
                key={`item_${index}`}
              ></span>
            );
          }
        })}
      </div>
    </div>
  );
};

export default LightOut;
