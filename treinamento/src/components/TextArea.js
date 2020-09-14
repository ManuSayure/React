import React from 'react';

class TextArea extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value: 'Escreva aqui ...'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this. handleSubmit.bind(this);
    }
    handleSubmit(event){
        alert('Um texto foi digitado: ' + this.state.value);
        event.preventDeafoult();

    };
    handleChange(event){
        this.setState({value : event.target.value});
    }
     render(){
         return(
             <form onSubmit = {this.handleSubmit}>
                 <div className='form-group'>
                    <label >
                        Escreve seu texto:                      
                    </label>
                    <textarea type= 'text' value={this.state.value} onChange = {this.handleChange} className= 'form-control'/>
                    <input type = 'submit' value='Enviar'  className = 'btn btn-primary'/>
                 </div>
                 

             </form>
         )
     }
}

export default TextArea;
