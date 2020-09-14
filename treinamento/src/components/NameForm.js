import React from 'react';
class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }
    handleSubmit(event){
        alert('Um nome foi digitado: ' + this.state.value);
        event.preventDefault();

    }
    handleChange(event){
        this.setState({value : event.target.value});
    }
    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                <div className = 'form-group'>
                    <label className='control-label'> Nome: </label>                    
                    <input type='text' value = {this.state.value} onChange={this.handleChange} className='form-control'/>  
                                        
                </div>  
                <input type ='submit' value = 'Enviar' className = 'btn btn-primary'/>          
                
                             

            </form>

        );
    }
}
export default NameForm;