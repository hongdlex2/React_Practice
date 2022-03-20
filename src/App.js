import logo from './logo.svg';
import './App.css';

function Header(props) {
  return <header>
    <h1><a href='/'>{props.title}</a></h1>
  </header>
}
function Nav(props){
  const list = []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    list.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
  }
  return <nav>
    <ol>
      {list}
    </ol>  
  </nav>
}
function Article(props){
  return<article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}



function App() {
  const topics = [
    {id:1, title:'html1', body:'html is ...'},
    {id:2, title:'css2', body:'css is ...'},
    {id:3, title:'javaScript3', body:'javascript is ...'}
  ]
  return (
    <div>
      <Header title='React'></Header>
      <Nav topics={topics}></Nav>
      <Article title='Welcome' body="Hello, WEB"></Article>
    </div>   
  );
}

export default App;
