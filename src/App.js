import React from 'react';


//const App = () => <h1>Hi</h1>

class App extends React.Component{
  constructor(){
    super();
    this.state = {items :[]}
  }

  componentWillMount(){
    fetch('https://swapi.co/api/people/?format=json')
    .then( response => response.json())
    .then( ({results : items}) => this.setState({items}))
  }

   filter(e){
     this.setState({filter: e.target.value})
   }

  render(){
    let items = this.state.items

    if(this.state.filter){
      items = items.filter( item => item.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    }

    return (

       <div>
           <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
              <a className="navbar-brand" href="#">Star Wars</a>
              </div>
          </div>
          </nav>
          <div className="container">
          <h2>Star Wars Characters</h2>
          <div className="form-group">
            <input className="form-control" type="text" onChange={this.filter.bind(this)} placeholder="Search for names.." title="Type in a name"/>
          </div>
           <table className="table table-bordered table-hover">
           <thead className="thead-inverse">
             <tr>
               <th>Name</th>
               <th>Hair Color</th>
               <th>Gender</th>
               <th>Skin Color</th>
             </tr>
           </thead>
           <tbody>
            {items.map( item => <ListItem key={item.name} item={item} /> )}
           </tbody>
           </table>
          </div>
       </div>
      )
  }
}

const ListItem = ( props) =><tr>
<td>{props.item.name}</td>
<td>{props.item.hair_color}</td>
<td>{props.item.gender}</td>
<td>{props.item.skin_color}</td>
</tr>


export default App;
