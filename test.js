import React, { Component } from 'react';
import MaterialNavbar from './components/MaterialNavbar'
import './assets/css/Material.css'
class App extends Component {
    render() {
        const navigation = [{
            linkName: 'link 1',
            Url: '#'
        }, {
            linkName: 'link 2',
            Url: '#'
        }, {
            linkName: 'link 3y',
            Url: '#'
        }]
        const dropdown = [{
            linkName: 'dropdownlink',
            dropdownLinks: [{
                    dropLink: 'dropdown 1',
                    dropUrl: '#'
                },
                {
                    dropLink: 'dropdown 2',
                    dropUrl: '#'
                },
                {
                    dropLink: 'dropdown 3',
                    dropUrl: '#'
                }
            ]
        }]
        return (
            <div className="App">
                <MaterialNavbar position={"fixed"} dropdown={dropdown}  logo={"readme"} navigation={navigation}/>
            </div>
        )
    }
}
export default App;