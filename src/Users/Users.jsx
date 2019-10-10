import React, { Component } from 'react';
 
 class Users extends Component {
          render() {
            if(this.props.checked){
              return (
                <fieldset>
                    <ul >
                      <span style={ {fontWeight:'bold'}}>User ID:&nbsp;</span>{this.props.id} <br></br>
                      <span style={ {fontWeight:'bold'}}>Full Name:&nbsp;</span>{this.props.name} <br></br>
                      <span style={ {fontWeight:'bold'}}>E-mail:&nbsp;</span>{this.props.email}  <br></br>
                      <span style={ {fontWeight:'bold'}}>Address:&nbsp;</span>{this.props.address}  <br></br>
                      <span style={ {fontWeight:'bold'}}>company:&nbsp;</span>{this.props.company}  <br></br>
                    </ul>
                </fieldset>
              )
            }else{
              return (null)
            }
          }
        }
export default Users;