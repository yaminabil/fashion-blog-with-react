import './style.css'
import Header from "./components/Header"
import Article from "./components/Article"
import Footer from "./components/Footer"
import { Fragment } from 'react'
import data from "./data/data"

export default function App  () {
    return (
        <Fragment>
           <Header />
          
              
           <Article
              date = {data[0].date} 
              title = {data[0].title}  
              image = {data[0].image} 
              content = {data[0].content}/>
           <Article 
            date = {data[1].date} 
            title = {data[1].title}  
            image = {data[1].image} 
            content = {data[1].content}/>
           
           <Footer />
             
        </Fragment>
    
    )
}