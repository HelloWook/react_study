import './App.css';
function Header(props){
  return <header>
  <h1><a href ="/">{props.title}</a></h1>
  </header>
}
function Article(props){
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}
function Nav(props){
  const lis = [
    <li><a href ='/read/1'>html</a></li>,
    <li><a href ='/read/1'>css</a></li>,
    <li><a href ='/read/1'>js</a></li>,
  ]
  for(let i=0; props.topics.lenght;i++)
  {
    let t = props.topics[i]
    lis.push(<li><a href={'/read/'+t.id}>{t.title}</a></li>)
  }
  return <nav>
    <ol>
     
    </ol>
  </nav>

}
function App()
{
    const topics = [
    {id:1, title:'html', body:'html is..'}
    ,{id:2, title:'css', body:'css is..'}
    ,{id:3 ,title:'js', body:'js is..'}
    ]
  return<div>
      <Header title = "React"></Header>
      <Nav topics = {topics}></Nav>
      <Article title = "Welcome" body = "Hello, web"></Article>
      <Article title = "Hi" body = "Hello, React"></Article>
    </div>
}
export default App;
