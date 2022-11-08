import Card from "../components/card/Card";
import Subscribe from "../components/subscribe/Subscribe";
import Html from "../assets/img/logo_html.png"
import  Css from "../assets/img/logo_css.png"
import Logo from "../assets/img/logo_brush.png"

const cards = [
  {
    src: Html,
    title:"HTML",
    url: '/Html'
  },
  {
    src: Css,
    title:"CSS",
    url: '/Css'
  },
  {
    src: Logo,
    title:"Graphic Design",
    url: '/Logo'
  },
]

const Home = () => {

  return (
    <div className="root">
      <section id="showcase">
        <div className="container">
          <h1>Professional Web Design</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            luctus ipsum, rhoncus semper magna. Nulla nec magna sit amet sem
            interdum condimentum.
          </p>
        </div>
      </section>
      <Subscribe/>
      <section id="boxes">
        <div className="container">
          {
            cards.map((item,key)=><Card {...item} key={key}/>)
          }
        </div>
      </section>
    </div>
  );
};

export default Home;
