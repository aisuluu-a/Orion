
import "./main.scss";
import React from "react";
import axios from "axios";

class Main extends React.Component {
  state = {
    articles: [
      {
        "source": {
        "id": "techradar",
        "name": "TechRadar"
        
        },
        "author": "Josephine Watson",
        "title": "Tesla issues software update to disable passenger play while in motion",
        "description": "Following news from the NHTSA of a preliminary investigation into the feature, Tesla dials back passenger play",
        "url": "https://www.techradar.com/news/tesla-issues-software-update-to-disable-passenger-play-while-in-motion",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/amGJYGoxAC4yUVBDpBJjf7-1200-80.jpg",
        "publishedAt": "2021-12-24T14:45:35Z",
        "content": "At this point, it's no surprise when Tesla or CEO Elon Musk announces a boundary-breaking feature for its electric vehicles.\r\nEarlier this year, Tesla rolled out the ability for passengers to play vi… [+2971 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Medium"
        },
        "author": "Lavanyabantu",
        "title": "How To Solve Issues With AI Into Digital Marketing",
        "description": "AI or “artificial intelligence” is described as — machines and computers working with “cognitive” functions just like how human minds associate with other human minds, like in problem-solving and…",
        "url": "https://medium.com/@lavanyabantu12/how-to-solve-issues-with-ai-into-digital-marketing-b88ef6e2fff7",
        "urlToImage": "https://miro.medium.com/max/612/0*R3RcVEmCYpzKkS9V",
        "publishedAt": "2021-12-24T14:38:00Z",
        "content": "AI or artificial intelligence is described as machines and computers working with cognitive functions just like how human minds associate with other human minds, like in problem-solving and learning … [+6321 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Motley Fool"
        },
        "author": "newsfeedback@fool.com (Motley Fool Staff)",
        "title": "Why an Unclear Investigation Into Lucid Should Keep Investors on Their Toes",
        "description": "Need more details to understand extent of issues.",
        "url": "https://www.fool.com/investing/2021/12/24/why-an-unclear-investigation-into-lucid-should-kee/",
        "urlToImage": "https://g.foolcdn.com/editorial/images/658772/sec.jpg",
        "publishedAt": "2021-12-24T14:30:00Z",
        "content": "In this segment of Motley Fool Live, recorded on Dec. 7, Fool contributors Toby Bordelon and Lou Whiteman discuss a current SEC investigation involving Lucid(NASDAQ:LCID), an electric car manufacture… [+3321 chars]"
        }
    ],
    isLoading: true,
    errors: null
  };

  getArticles() {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=ai&pageSize=3&apiKey=4571b030e5684f1f888e0c02f4552897"
      )
      .then(response => {
        return response.data.articles.map(article => ({
          image: `${article.urlToImage}`,
          date: `${article.publishedAt}`,
          title: `${article.title}`,
          url: `${article.url}`
        }));
      })
      .then(articles => {
        this.setState({
          articles,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getArticles();
  }

  render() {
    const { isLoading, articles } = this.state;
    return (
      <React.Fragment>
        <h2>News</h2>
        <div className="box">
          {!isLoading ? (
            articles.map(article => {
              const { date, title, url, image } = article;
              return (
                
                <div className="news" key={title}>
                  <img src={image} alt="img" srcset={image} />
                  <p>{date}</p>
                  <h4>{title}</h4>
                  <span>{url}</span>
                </div>
                
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </React.Fragment>
    );
  }
}
export default Main;

