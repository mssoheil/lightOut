import * as React from "react";
// styles
import "./index.scss";
function reducer(state, action) {
  return { ...state, ...action };
}
const LightOut = () => {
  const initialState = () => ({
    randomArray: Array(5).fill([])
  });
  const [state, dispatch] = React.useReducer(reducer, initialState());

  React.useEffect(() => {
    const newArr = state.randomArray.map((item, index) => {
      const tempArr = [];
      for (let i = 0; i < 5; i++) {
        tempArr[i] = {
          row: index,
          col: i,
          isActivated: false,
          id: index * 5 + i + 1
        };
      }
      return tempArr;
    });
    dispatch({ randomArray: randomActive(newArr) });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function randomActive(array) {
    const tempArr = array;
    let activeCounter = 0;
    const finalArray = tempArr.map((item, index) => {
      return item.map((innerItem, index) => {
        if (innerItem.id === Math.floor(Math.random() * 25 + 1)) {
          innerItem.isActivated = true;
          activeCounter += 1;
          return innerItem;
        }
        return innerItem;
      });
    });
    if (activeCounter === 0) {
      finalArray[0][0].isActivated = true;
    }

    return finalArray;
  }

  function changeActiveStates(row, col, index) {
    const tempArr = state.randomArray;
    tempArr[row][col].isActivated = !tempArr[row][col].isActivated;
    if (col + 1 < 5) {
      tempArr[row][col + 1].isActivated = !tempArr[row][col + 1].isActivated;
    }
    if (col - 1 >= 0) {
      tempArr[row][col - 1].isActivated = !tempArr[row][col - 1].isActivated;
    }
    if (row - 1 >= 0) {
      tempArr[row - 1][col].isActivated = !tempArr[row - 1][col].isActivated;
    }
    if (row + 1 < 5) {
      tempArr[row + 1][col].isActivated = !tempArr[row + 1][col].isActivated;
    }

    dispatch({ randomArray: tempArr });

    const checkArr = tempArr.filter(
      item => item.filter(innerItem => innerItem.isActivated).length !== 0
    );

    if (checkArr.length === 0) {
      window.alert("won");
    }
  }
  return (
    <div className="lightOut">
      <div className="inner-wrapper">
        {state.randomArray.map((item, index) => {
          return (
            <div>
              {item.map((innerItem, indx) => {
                return (
                  <span
                    onClick={() =>
                      changeActiveStates(innerItem.row, innerItem.col, indx)
                    }
                    className={`lightOut__item ${
                      innerItem.isActivated ? "active" : ""
                    }`}
                  ></span>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LightOut;
