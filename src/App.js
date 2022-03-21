import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Article(props){
  return<article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function Header(props) {
  return <header>
    <h1><a href='/' onClick={function(event){
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}

function Nav(props){
  const list = []

  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    list.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={function(event){
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}>{t.title}</a>
      </li>)
  }

  return <nav>
    <ol>
      {list}
    </ol>  
  </nav>
}



function App() {
  const topics = [
    {id:1, title:'html1', body:'html is ...'},
    {id:2, title:'css2', body:'css is ...'},
    {id:3, title:'javaScript3', body:'javascript is ...'}
  ]

  // const _mode = useState('WELCOME');
  // const mode = _mode[0];
  // const setMode = _mode[1];
  
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);

  let content = null;

  if(mode === 'WELCOME'){
    content = <Article title='Welcome' body="Hello, WEB"></Article>
  }else if(mode === 'READ'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }

  return (
    <div>
      <Header title='React' onChangeMode={function(){
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={function(_id){
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
    </div>   
  );
}

export default App;
