import './App.css';
import { useState } from 'react'; //state를 사용하기 위해선 작성해줘야하는 훅 
function Create(props)
{
  return <article>
    <h2>Create</h2>
    <form onSubmit={event=>{event.preventDefault(); const title = event.target; const body = event.target.body.value; props.onCreate(title,body)}}>   
    <p><input type = "text" name ="title" placeholder='title'></input></p>
    <p><textarea name='body' placeholder='body'></textarea></p>
    <p><input type = "submit" value="create"></input></p>
    </form>
  </article>
}
function Header(props) // 컴포넌트 생성방법 _대문자를 사용해서 작성해야함 
  {
        return <header>
          <h1><a href='/' onClick={function(event){event.preventDefault();props.onChangeMode();}}>{props.title}</a></h1>
        </header>
  }
  function Artice(props) // props 사용법
  {
    return <artice>
    <h2>{props.title}</h2>
    </artice>
  }
  function Nav(props){
    const lis = []
    for(let i=0; i<props.topics.length; i++){
      let t = props.topics[i];
      lis.push(<li key={t.id} >
        <a id={t.id} href={'/read/'+t.id} onClick={function(event){event.preventDefault(); props.onChangeMode(Number(event.target.id));}}> {t.title} </a>
      </li>)
    }
    return <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  }

function App() {
  /* const _mode = useState("WELCOME"); // state 초기값 
  const mode = _mode[0] // mode0 기본값 
  const setmode = _mode[1]  //mode1 변경값  */
  const [Mode, setmode] =useState('WELCOME'); // usestate를 사용함으로서 상태로 만듬
  const [id, setid] =useState(null); 
  const [nextID, setNextID] =useState(4);
  let content = null;
  const [topics,setTopics] = useState( [
    {id:1, title : "Html",body:"html is ...."},
    {id:2, title : "Css",body:"css is ...."},
    {id:3, title : "Js",body:"JavaScript is ...."}
  ]);// 목차들을 저장하기위한 배열생성 
  if(Mode === 'WELCOME')
  {
   content = <Artice title ="Welcome" body  ="Hello WEB"></Artice>
  } 
  else if(Mode === 'READ'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Artice title={title} body={body}></Artice>
  } 
  else if (Mode==='CREATE')
  {
    content = <Create onCreate={(_title,_body)=>{
      const newTopic = {id:nextID,title:_title, body:_body}
      const newTopics = [...topics]
      newTopics.push(newTopic);
      topics.push(newTopic);
      setTopics(newTopics);
    }}></Create>
  }

  return (
    <div className="App">
     <Header title="남정욱" onChangeMode={function(){setmode('WELCOME');}}></Header>{/*  함수를 등록시키기 위해 작성 */}
     <Nav topics={topics} onChangeMode={function(id){setmode("READ"); setid(id) }}></Nav>
    {content}
    <a href = "/create"onClick={event=>{event.preventDefault(); setmode('CREATE');}}>create</a> 
    </div>//props안에 값 전달법 
  );
}

export default App;
// 상태를 만들떄 원시데이터(string number boolean ) / 범 객체(object ,array)의 처리방법은 달라져야함
// 범객체는 벨류를 복재해서 새로운 데이터를 뉴벨루로 해야함
// 즉 복제본 데이터를 생성한뒤에 호출해야한다는 것 