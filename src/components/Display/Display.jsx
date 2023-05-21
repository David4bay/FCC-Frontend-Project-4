/* eslint-disable react/prop-types */


function Display({result}) {
    return (
        <div className="Result__Box" id="display">
        <strong className="Top__Result">{result}</strong>
        </div>
    )
}

export default Display;