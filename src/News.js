export default function News(props) {

    console.log(props);
return(
    <div className="news">
        
        <div className="news-img">

            {
                props.article.urlToImage!=null?
                <img src={props.article.urlToImage}></img>:
                <img src="https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg"></img>
            }

        </div>
        <h3 className="title-size">
            {props.article.title}
        </h3>

        
            <p>{props.article.description?.substring(0,100).concat("...")}<a href={props.article.url} target="_blank">Read More</a> </p>
        
        
        <div className="source">
            {
            props.article.author!==null?
            <p>{props.article.author}</p>:
            <p>Not mentioned</p>
           }
            <p>{props.article.source.name}</p>
        </div>

    </div>
)
}