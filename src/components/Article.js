


export default function Article(props) {
    return (
        <article>
                <p class = "date">{props.date}</p>
                <h1>{props.title}</h1>
                <img  alt="article" src = {`${props.image}`}/>
                <p class="paragraph">
                    {props.content}
                   
                </p>
               <a class="continues" href="#" >Continues...</a>
               
            </article>
      
    )
}