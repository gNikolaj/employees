import './employees-list-item.css';
import {Component} from "react";

class EmployeesListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            star: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    onStar = () => {
        this.setState(({star}) => ({
            star: !star
        }))
    }

    render() {
        const {name, salary, onDelete} = this.props;
        const {increase, star} = this.state;

        let classNames = "list-group-item d-flex justify-content-between";
        if (increase) {
            classNames += " increase";
        }
        if (star) {
            classNames += " like";
        }

        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={this.onStar}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                            className="btn-cookie btn-sm "
                            onClick={this.onIncrease}>
                        <i className="fas fa-cookie"/>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"/>
                    </button>
                    <i className="fas fa-star"/>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;