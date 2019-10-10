import React, { Component } from 'react';
import Title from './Title/Title';
import FavUsers from './FavUsers';


class FavUsersForm extends Component{
        constructor(props) {
          super(props);
            this.handleUserCheck = this.handleUserCheck.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.state = {
              checkboxGroup: [false, false, false,false,false,false,false,false,false,false,false,false],
              showForm: true
              };
            }
        handleHTTPErrors(response) {
              if (!response.ok) throw Error(response.status + ': ' + response.statusText);
              return response;
            }
            /*
        handleUserCheck(event) {
          let checkboxes = this.state.checkboxGroup.slice();
          checkboxes[event.target.value] = event.target.checked;
          this.setState({
            checkboxGroup: checkboxes
          });
        }
        */
        render(){
          const formStyle = {
                fontSize: '20pt',
                color: 'blue'
              };
          const submitStyle ={
            padding:'5px',
            border: 'none',
            backgroundColor: 'lightblue',
            height: '155%',
            width: '20%'
            };
          if(this.state.showForm){
            return (
                  <form onSubmit={this.handleSubmit} style={formStyle}>
                  <Title className="titleStyle"/> 
                    <fieldset>
                      <legend><strong>check off one or more boxes</strong></legend>
                      <label>
                        <input type='checkbox' name='checkboxGroup' value='0' 
                                checked={this.state.checkboxGroup[0]}
                                onChange={this.handleUserCheck} />
                        &nbsp; Bret
                      </label>
                      <br></br>

                      <label>
                        <input type='checkbox' name='checkboxGroup' value='1'
                                checked={this.state.checkboxGroup[1]}
                                onChange={this.handleUserCheck} />
                        &nbsp; Antonette
                      </label>
                      <br></br>
                    
                      <label>
                        <input type='checkbox' name='checkboxGroup' value='2'
                                checked={this.state.checkboxGroup[2]}
                                onChange={this.handleUserCheck} />
                        &nbsp; Samantha
                      </label>
                      <br></br>

                        <label>
                        <input type='checkbox' name='checkboxGroup' value='3'
                                checked={this.state.checkboxGroup[3]}
                                onChange={this.handleUserCheck} />
                        &nbsp; Karianne
                        </label>
                        <br></br>

                        <label>
                        <input type='checkbox' name='checkboxGroup' value='4'
                                checked={this.state.checkboxGroup[4]}
                                onChange={this.handleUserCheck} />
                        &nbsp; Kamren
                        </label>
                        <br></br>

                        <label>
                        <input type='checkbox' name='checkboxGroup' value='5'
                                checked={this.state.checkboxGroup[5]}
                                onChange={this.handleUserCheck} />
                        &nbsp; Leopoldo_Corkery
                        </label>
                        <br></br>

                        <label>
                        <input type='checkbox' name='checkboxGroup' value='6'
                                checked={this.state.checkboxGroup[6]}
                                onChange={this.handleUserCheck} />
                        &nbsp; Elwyn_Skiles
                        </label>
                        <br></br>

                        <label>
                        <input type='checkbox' name='checkboxGroup' value='7'
                                checked={this.state.checkboxGroup[7]}
                                onChange={this.handleUserCheck} />
                        &nbsp; Maxime_Nienow
                        </label>
                        <br></br>

                        <label>
                        <input type='checkbox' name='checkboxGroup' value='8'
                                checked={this.state.checkboxGroup[8]}
                                onChange={this.handleUserCheck} />
                        &nbsp; Delphine
                        </label>
                        <br></br>

                        <label>
                        <input type='checkbox' name='checkboxGroup' value='9'
                                checked={this.state.checkboxGroup[9]}
                                onChange={this.handleUserCheck} />
                        &nbsp; Moriah_Stanton
                        </label>
                        <br></br>

                        <label>
                        <input type='checkbox' name='checkboxGroup' value='10'
                                checked={this.state.checkboxGroup[10]}
                                onChange={this.handleUserCheck} />
                        &nbsp; Jack
                        </label>
                        <br></br>

                        <label>
                        <input type='checkbox' name='checkboxGroup' value='11'
                                checked={this.state.checkboxGroup[11]}
                                onChange={this.handleUserCheck} />
                        &nbsp; Sam
                        </label>
                        <br></br>

                      <input type='submit' value='Submit' style={submitStyle} />
                    </fieldset>
                  </form >
            );
          }else{
            return(  
              <FavUsers />
            )
          }
        }
        handleUserCheck(event) {
          let checkboxes = this.state.checkboxGroup.slice();
          checkboxes[event.target.value] = event.target.checked;
          this.setState({
            checkboxGroup: checkboxes
          });
        }

        handleSubmit(event) {
          event.preventDefault();
          for(let i = 0; i < this.state.checkboxGroup.length; i++){
            let id = i + 1;
            if(this.state.checkboxGroup[i]){
              fetch(`http://srv-jchristie.deploy.cs.camosun.bc.ca/users/${id}`,{
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json'
                  },
                body: JSON.stringify({
                  "checked": true
                  })
                })
              .then(response=> this.handleHTTPErrors(response))
              .then(result=> {
                this.setState({
                  showForm: false
                });
              })
              .catch(error=> {
                console.log(error);
              });
            }else{
              fetch(`http://srv-jchristie.deploy.cs.camosun.bc.ca/users/${id}`,{
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json'
                  },
                body: JSON.stringify({
                  "checked": false
                  })
                })
              .then(response=> this.handleHTTPErrors(response))
              .then(result=> {
                this.setState({
                  showForm: false
                });
              })
              .catch(error=> {
                console.log(error);
              });
            }
          }
        }
      }
export default FavUsersForm;