import React, { Component } from 'react';
import Title from './Title/Title';
import Users from './Users/Users';
import './Title/Title.css';


class FavUsers extends Component {
        constructor(props){          
          super(props);              
          this.state = { users:[] };
        }

          render() {
            const favUsersStyle = { 
            height: 300,
            width: 500,
            padding: 0,
            color: 'red',
            backgroundColor: 'red',
          };

          return(  
            <div>
                <Title/> 
                  { this.state.users.map (user => 
                    <Users key={user.id} 
                          id={user.id}
                          username={user.username}
                          name={user.name}
                          email={user.email}
                          address={user.address}
                          company={user.company}
                          style={user.color}
                          checked={user.checked} /> 
                    )
                  }  
               
            </div>
              )
            }
            componentDidMount(){
            fetch('http://srv-jchristie.deploy.cs.camosun.bc.ca/users')
            .then(response => this.handleHTTPErrors(response))
            .then(response => response.json())
            .then(result => {
              this.setState(  {
                users: result
              } );
            })
            .catch(error => {
              console.log(error);
            });
          }
          handleHTTPErrors(response) {
              if (!response.ok) throw Error(response.status + ': ' + response.statusText);
              return response;
            }
        }
export default FavUsers;