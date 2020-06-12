import React from 'react';
import Header from './header';
import GradeTable from './gradeTable';
import GradeForm from './gradeForm';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grades: []
        };
        this.getGradeAverage = this.getGradeAverage.bind(this);
        this.addNewGrade = this.addNewGrade.bind(this);
    }

    componentDidMount () {
        fetch('api/grades')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    grades: data
                })
                console.log(data)
            })
    }

    getGradeAverage() {
        if (this.state.grades.length < 0) {
            return '0 %'
        } else {
            let gradeSum = 0; 
            for (let i = 0; i < this.state.grades.length; i++) {
                gradeSum += this.state.grades[i].grade;
            }
            return (gradeSum / this.state.grades.length) + '%'
        }
    }

    addNewGrade(newGrade) {
        fetch('api/grades',{
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(newGrade)
        })
            .then(res => res.json())
                .then(grade => {
                    this.setState({
                        grades: this.state.grades.concat(grade)
                    })
                })
                .catch(err => {
                    console.error(err);
                })
    }

  render() {
    return (
    <div className= 'container'>
        <Header average = {this.getGradeAverage()}/>
        <div className = 'componentContainer mt-4'>
            <GradeTable grades={this.state.grades}/>
            <GradeForm addGrade = {this.addNewGrade}/>
        </div>
    </div>
    );
  }
}

export default App;