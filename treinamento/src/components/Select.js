import React from 'react';

class Select extends React.Component{
    constructor(props){
        super(props);
        this.state = { value: 'coco'};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(event){
        alert('Seu sabor favorito é: ' + this.state.value);
        event.preventDefault();
    };

    handleChange(event){
        this.setState({ value: event.target.value});
    };

    render(){
        return(
            <form onSubmit = {this.handleSubmit} >
                <div className = 'form-group'>
                <label className = 'form-control'>
                    Escolha seu favorito:
                    <select value={this.state.value}  onChange = {this.handleChange}>
                        <option value = 'laranja'>Laranja</option>
                        <option value = 'limao'>Limão</option>
                        <option value = 'maracuja'>Maracujá</option>
                        <option value = 'coco'> Coco </option>
                    </select>
                </label>
                <input className='btn btn-primary' type ='submit' value = 'Enviar'/>

                </div>  
            </form>
        );
    }
}
 export default Select;