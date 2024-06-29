import { useEffect, useState } from 'react';
import './App.css';
import News from './News';

function App() {

  let [articles,setArticles]=useState([])
  let [category,setCategory]=useState("india")


  let [date,setDate]=useState("2024-6-28")
  let [click,setClick]=useState("no")

  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=${date}&language=en&apiKey=8cfdf03000394b06b5d0c6763600f60c`)
    .then((response)=>response.json())
    .then((news)=>{
      setArticles(news.articles);
      console.log(news.articles);
      setClick("no")
    })
    .catch((err)=>{
      console.log(err)
    })
  },[click])


  return (
    <div className="App">
      <header className='header'>
        <h1>UpdateU</h1>
        <input type='text' onChange={(event)=>{
          if(event.target.value!==""){
            setCategory(event.target.value);
          }
          else{
            setCategory("india")
          }
        }}placeholder='search news'></input>






        <input type="date" onChange={(event)=>{
          if(event.target.value!==""){
            setDate(event.target.value)
          }
          else{
            setDate("2004-05-15")
          }
        }}placeholder='YYYY-MM-DD'>
          
        </input> 

        <button className="btn" onClick={()=>{
           setClick("yes");
        }}>Find</button>






      </header>
      <section className='news-articles'>
      {

        articles.length!==0?

          articles.map((article)=>{
           return(
            <News article={article}/>
          )

        })
        :
        <div className='error-msg'> <h3>Opps Not Found!!</h3></div>
       
      }

      </section>

    </div>
  );
}

export default App;