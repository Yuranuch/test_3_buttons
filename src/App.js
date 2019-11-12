import React, {Component} from 'react';
import './App.css';
import {connect} from "react-redux";
import {addErrorHint, addSuccessHint, addWarningHint} from "./redux/reducer";
import Hint from "./Hint";

class App extends Component {
    successHint = () => {
        this.props.addSuccessHint()
    }
    warningHint = () => {
        this.props.addWarningHint()
    }
    errorHint = () => {
        this.props.addErrorHint()
    }

    render() {
        const hintsElements = this.props.hintsData.map(h =><Hint id={h.id} title={h.title} /> )

        return (
            <div className="App">
                <div>
                    <button onClick={this.successHint}>Success</button>
                    <button onClick={this.warningHint}>Warning</button>
                    <button onClick={this.errorHint}>Error</button>
                </div>
                <div className="hints">
                    {hintsElements}
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        hintsData: state.hintsData,
        firstButtonHintStatus: state.firstButtonHintStatus
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addSuccessHint: () => {
            dispatch(addSuccessHint())
        },
        addWarningHint: () => {
            dispatch(addWarningHint())
        },
        addErrorHint: () => {
            dispatch(addErrorHint())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
