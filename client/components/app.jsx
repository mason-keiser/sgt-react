import React from 'react';
import Header from './header'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grades: []
        };
    }

    componentDidMount() {
        fetch('api/grades')
            .then(res => res.json())
            .then(data => console.log(data))
    };

  render() {
    return (
    <div className='container'>
        <Header/>
    </div>
    );
  }
}

export default App;