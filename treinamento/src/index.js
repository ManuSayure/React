import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


/*function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}*/
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Div() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

function Avatar(props){
  return(
    <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
    />
  );
}
function UserInfo(props){
  return(
    <div className="UserInfo">
        <Avatar autor = {props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
  );
}
/*
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo author={props.author}/>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
      {formatDate(props.date)}
      </div>
    </div>
  );
}*/
/*function Clock(props){
  return(
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
  </div>
  );

}*/
/** State e Ciclo de Vida */

function FormatDateTime(props){
  return(
    <h2>It is {props.date.toLocaleTimeString()}.</h2>
  );

}
class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = { date:new Date() };

  }
  //Metodos de ciclo de vida
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000 
    );

  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  tick(){
    this.setState({
      date: new Date()
    });
  }
  render(){
    return(
      <div>
      <h1>Hello, world!</h1>
      < FormatDateTime date = {this.state.date} />     
  </div>    
    );
  }
}
function Mult(){
  return(
    <div>
      <Clock/>
      <Clock/>
      <Clock/>
    </div>
  )
}  

/** Manipulando Eventos */
class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = { isToggleOn: true };
    //this.handleClick = this.handleClick.bind(this);    
  }
 /* handleClick(){
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }*/
  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render(){
    return(
      <button onClick = { this.handleClick }>
        {this.state.isToggleOn? 'ON' : 'OFF'}
      </button>
    );
  }
}
/** Renderização condicional */
function UserGreeting(props){
  return(
    <h1>
      Welcome to back!
    </h1>
  );
}
function GuestGreeting(){
  return(
    <h1>
      Please sing up.      
    </h1>
  );
}
function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return(
      <UserGreeting/>
    );
  }
  return(
    <GuestGreeting/>
  );
}
function LoginButton(props){
  return(
    <button onClick = {props.onClick}>
      Login
    </button>
  );
}
function LogoutButton(props){
  return(
    <button onClick = {props.onClick}>
      Logout
    </button>
  )
}
class LoginControll extends React.Component{
  constructor(props){
    super(props);
    this.state = { isLoggedIn: false };
  }
  handleLoginClick = () => { 
    this.setState({
      isLoggedIn : true
    });
  }
  handleLogoutClick = ()=> {
    this.setState({
      isLoggedIn: false
    });
  }
  
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function WarningBanner(props){
  if(!props.warn){
    return null;
  }
  return(
    <div className='warning'>
        Warning!!
    </div>
  );
}
class Page extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showWarning: true
    }; 
    this.handleToggleClick = this.handleToggleClick.bind(this);      
  }
  handleToggleClick(){
    this.setState( state => ({ showWarning : !this.state.showWarning }) );
  };
  render(){
    return(
      <div>
      <WarningBanner warn={this.state.showWarning}/>
      <button onClick = {this.handleToggleClick}>
        {this.state.showWarning? 'Hide' : 'Show'}
      </button>
    </div>
    );  
  }
}
/**Lista e Chaves */
function Blog(props){
  const sidebar=(
    <ul>
      {props.posts.map((post)=>
        <li key={post.id}>
          {post.title}       
        </li>
      )}
    </ul>
  );
  const content = (
    props.posts.map((post) => 
      <div key = {post.id}>  
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    )
  );
  return(
    <div>
      {sidebar}
      <hr/>
      {content}
    </div>
  );
}
const posts = [
  {id:1, title: 'Hello World', content: 'Welcome to learning React!' },
  {id:2, title: 'Instalation', content: 'You can install React from npm.'}
];
/**Forms */
/**Inputs */
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
