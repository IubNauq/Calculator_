import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));


class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: "",
            history: 0,
            operated: false
        }
    }

    handleClick = (e) => {
        this.setState(state => {
            if (state.operated === true) {
                state.operated = false;
                state.result = "";
            }

            return {result: state.result.concat(e.target.value)}
        })
    }

    handleAdd = () => {
        this.setState(state => {
            const num = Number(state.result)
            const sum = state.history + num
            return {
                history: sum,
                result: String(sum),
                operated: true
            }
        })
    }

    handleDel = () => {

    }

    handleAC = () => {

    }

    handleEqual = () => {

    }

    render() {
        return (
            <div className="calculator-grid">
                <div className="output">
                    <div className="previous-operand"></div>
                    <div className="current-operand">{this.state.result}</div>
                </div>
                <button className="span-two" onClick={this.handleAC}>AC</button>
                <button onClick={this.handleDel}>DEL</button>
                <button>%
                </button>
                <button onClick={this.handleClick}
                        value={'1'}>1
                </button>
                <button onClick={this.handleClick}
                        value={'2'}>2
                </button>
                <button onClick={this.handleClick}
                        value={'3'}>3
                </button>
                <button onClick={this.handleClick}>*</button>
                <button onClick={this.handleClick}
                        value={'4'}>4
                </button>
                <button onClick={this.handleClick}
                        value={'5'}>5
                </button>
                <button onClick={this.handleClick}
                        value={'6'}>6
                </button>
                <button onClick={this.handleAdd}>+</button>
                <button onClick={this.handleClick}
                        value={'7'}>7
                </button>
                <button onClick={this.handleClick}
                        value={'8'}>8
                </button>
                <button onClick={this.handleClick}
                        value={'9'}>9
                </button>
                <button onClick={this.handleClick}>-</button>
                <button onClick={this.handleClick}>.</button>
                <button onClick={this.handleClick}>0</button>
                <button className="span-two" onClick={this.handleEqual}>=</button>
            </div>
        );
    }
}

root.render(<Calculator/>);

