import "../sass/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste maxime
          officiis incidunt, voluptatum, consequuntur magnam minima distinctio
          voluptas omnis obcaecati recusandae laborum. Sapiente libero
          consequuntur explicabo blanditiis eius nihil magni?
        </p>
        <div className="go">
          <button>Explore Products</button>
          <FontAwesomeIcon icon={faArrowRight} size="2xl"  className="arrow"/>
        </div>
      </div>
    </div>
  );
}
export default Home;
