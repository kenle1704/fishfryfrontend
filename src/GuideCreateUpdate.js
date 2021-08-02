import React, { Component } from 'react';

import ApiService from './ApiService';

const apiService = new ApiService();

class GuideCreateUpdate extends Component {
    constructor(props) {
        super(props);
    
        //this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount(){
        const { match: { params } } = this.props;
        if(params && params.pk)
        {
          apiService.getGuide(params.pk).then((c)=>{
            this.refs.first_name.value = c.first_name;
            this.refs.last_name.value = c.last_name;
            this.refs.description.value = c.description;
          })
        }
      }

      handleCreate(){
        apiService.createGuide(
          {
            "first_name": this.refs.first_name.value,
            "last_name": this.refs.last_name.value,
            "description": this.refs.description.value
        }          
        ).then((result)=>{
          alert("Guide created!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }
      handleUpdate(pk){
        apiService.updateGuide(
          {
            "pk": pk,
            "first_name": this.refs.first_name.value,
            "last_name": this.refs.last_name.value,
            "description": this.refs.description.value
        }          
        ).then((result)=>{
          console.log(result);
          alert("Guide updated!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }
      handleSubmit(event) {
        const { match: { params } } = this.props;

        if(params && params.pk){
          this.handleUpdate(params.pk);
        }
        else
        {
          this.handleCreate();
        }

        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              Guide Firstname:</label>
              <input className="form-control" type="text" ref='first_name' />
            
            <label>
              Guide Lastname:</label>
              <input className="form-control" type="text" ref='last_name'/>
            
            <label>
              Description:</label>
              <textarea className="form-control" ref='description' ></textarea>
              

            <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </form>
        );
      }  
}

export default GuideCreateUpdate;
