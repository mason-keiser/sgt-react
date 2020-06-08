import React from 'react';
import Header from './header';
import GradeTable from './gradeTable'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grades: []
        };
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

  render() {
    return (
    <div className= 'container'>
        <Header/>
        <div className = 'gradeTable'>
            <GradeTable grades={this.state.grades}/>
        </div>
    </div>
    );
  }
}

export default App;