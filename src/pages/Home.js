import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import './Home.css'
import { Carousel, Card } from 'antd'
import Carousel1 from '../images/carousel1.png'
import Carousel2 from '../images/carousel2.png'
import Carousel3 from '../images/carousel3.png'
import Books from '../images/Book Bundle.png'
import Workbooks from '../images/bestYear.png'
import Courses from '../images/Buffett Of RE.png'

const carousel = [Carousel1, Carousel2, Carousel3]
const catCard = [Books, Workbooks, Courses]
const Home = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Carousel autoplay className="carousel">
          {carousel.map((e) => {
            return <img src={e} className="carousel-img" alt="carousel"></img>
          })}
        </Carousel>
        <div className="cards">
          <Card className="card">
            <h1>Books</h1>
            <img
              src={Books}
              alt="Books Category"
              className="card-content"
            ></img>
            <br />
            <Link to="/categories" state={'Books'} className="link">
              Shop Now
            </Link>
          </Card>
          <Card className="card">
            <h1>Videos</h1>
            <img
              src={Courses}
              alt="The Pivot Point System"
              className="card-content"
            ></img>
            <br />
            <Link to="/categories" state={'Videos'} className="link">
              Shop Now
            </Link>
          </Card>
          <Card className="card">
            <h1>Workbooks</h1>
            <img
              src={Workbooks}
              alt="Workbooks Category"
              className="card-content"
            ></img>
            <br />
            <Link to="/categories" state={'Workbooks'} className="link">
              Shop Now
            </Link>
          </Card>
          {/* <Card className="card">
            <h1>Shop By Category</h1>
            <div className="card-content">
              {catCard.map((e) => {
                return (
                  <img
                    src={e}
                    alt="category"
                    className="card-category"
                    onClick={() => console.log('beauty')}
                  ></img>
                )
              })}
              <br />
              <Link to="/" className="link">
                Shop All
              </Link>
            </div>
          </Card> */}
        </div>
      </div>
    </>
  )
}

export default Home
