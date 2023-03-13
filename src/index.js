import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));


class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: ""
        }
    }

    handleClick = (e) => {
        this.setState(state => {
            return {result: state.result.concat(e.target.value)}
        })
    }

    handleEqual = () => {
        this.setState(state => {
            try {
                return {result: String(eval(state.result))}
            }catch (err){
                return {result: "Error"}
            }

        })
    }

    handleAC = () => {
        this.setState(state => {
            return {result: ""}
        })
    }

    handleDEL = () => {
        this.setState(state => {
            return {result: state.result.substring(0, state.result.length - 1)}
        })
    }

    render() {
        return (
            <div className="calculator-grid">
                <div className="output">
                    <div className="previous-operand"></div>
                    <div className="current-operand">{this.state.result}</div>
                </div>
                <button className="span-two"
                        onClick={this.handleAC}>AC
                </button>
                <button onClick={this.handleDEL}>DEL
                </button>
                <button onClick={this.handleClick}
                        value={'/'}>/
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
                <button onClick={this.handleClick}
                        value={'*'}>*
                </button>
                <button onClick={this.handleClick}
                        value={'4'}>4
                </button>
                <button onClick={this.handleClick}
                        value={'5'}>5
                </button>
                <button onClick={this.handleClick}
                        value={'6'}>6
                </button>
                <button onClick={this.handleClick}
                        value={'+'}>+
                </button>
                <button onClick={this.handleClick}
                        value={'7'}>7
                </button>
                <button onClick={this.handleClick}
                        value={'8'}>8
                </button>
                <button onClick={this.handleClick}
                        value={'9'}>9
                </button>
                <button onClick={this.handleClick}
                        value={'-'}>-
                </button>
                <button onClick={this.handleClick} value={'.'}>.</button>
                <button onClick={this.handleClick}>0</button>
                <button className="span-two"
                        onClick={this.handleEqual}>=
                </button>
            </div>
        );
    }
}

root.render(<Calculator/>);

