/* eslint-disable react/prop-types */


function Display({result, calculation}) {
    return (
        <div className="Result__Box" id="display">
        <strong className="Top__Result">{`${calculation}\n${result}`}</strong>
        </div>
    )
}

export default Display;