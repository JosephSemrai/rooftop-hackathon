import "./styles.css";
import Timer from "./Timer";

export default function App() {
  return (
    <>
      <Timer />
      <div className="container">
        <div className="calculator" name="calc">
          <input
            type="text"
            readonly
            className="value"
            name="txt"
            id="display"
          />
          <span className="num clear" onclick="calc.txt.value = ''">
            c
          </span>
          <span className="num" onclick="document.calc.txt.value +='/'">
            &#xF7;
          </span>
          <span className="num" onclick="document.calc.txt.value +='*'">
            &#215;
          </span>
          <span className="num" onclick="document.calc.txt.value +='7'">
            7
          </span>
          <span className="num" onclick="document.calc.txt.value +='8'">
            8
          </span>
          <span className="num" onclick="document.calc.txt.value +='9'">
            9
          </span>
          <span className="num" onclick="document.calc.txt.value +='-'">
            -
          </span>
          <span className="num" onclick="document.calc.txt.value +='4'">
            4
          </span>
          <span className="num" onclick="document.calc.txt.value +='5'">
            5
          </span>
          <span className="num" onclick="document.calc.txt.value +='6'">
            6
          </span>
          <span className="num plus" onclick="document.calc.txt.value +='+'">
            +
          </span>
          <span className="num" onclick="document.calc.txt.value +='1'">
            1
          </span>
          <span className="num" onclick="document.calc.txt.value +='2'">
            2
          </span>
          <span className="num" onclick="document.calc.txt.value +='3'">
            3
          </span>
          <span className="num" onclick="document.calc.txt.value +='0'">
            0
          </span>
          <span className="num" onclick="document.calc.txt.value +='00'">
            00
          </span>
          <span className="num" onclick="document.calc.txt.value +='.'">
            .
          </span>
          <span
            className="num equal"
            onclick="document.calc.txt.value =eval(calc.txt.value)"
          >
            =
          </span>
        </div>
      </div>
    </>
  );
}
