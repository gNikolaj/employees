import {Component} from "react";

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "John C.", salary: 800, increase: true, rise: true, id: 1},
                {name: "Adam M.", salary: 3000, increase: false, rise: false, id: 2},
                {name: "Lari D.", salary: 5000, increase: false, rise: false, id: 3}
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data:data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const obj = {
            name: name,
            salary: salary,
            increase: false,
            rise: false,
            id: this.maxId++
        };

        this.setState(({data}) => {
            const newData = [...data, obj];
            return {
                data:newData
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;

        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList data={this.state.data} onDelete={this.deleteItem} onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm addItem={this.addItem}/>
            </div>
        );
    }
}

export default App;
