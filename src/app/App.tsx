import React from 'react';
import "../styles/style.css";


const App: React.FC = () => {
  return (
    <div id="top">
      <header className="header">
        <div className="container">
          <a href="#!" className="logo textGradient">StarBucks</a>
          <nav className="navbar">
            <a href="#!" className="headerLink">Home</a>
            <a href="#!" className="headerLink">Select</a>
            <a href="#Shop" className="headerLink">Shop</a>
          </nav>
        </div>
      </header>

      <main className="main">
        <section className="welcome">
          <div className="container">
            <div className="welcomeDesc">
              <h1 className="welcomeTitle">
                New Cafe <br />by
                <span className="textGradient"> StarBucks</span>
              </h1>
              <p className="welcomeText">
                Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!
              </p>
              <div className="welcomeBtns">
                <a href="#!" className="btn">Select a coffee</a>
                <a href="#!" className="link">More</a>
              </div>
              <div className="stats">
                <p className="statsItem">
                  <span className="statsNum">9k</span>
                  Premium Users
                </p>
                <p className="statsItem">
                  <span className="statsNum">2k</span>
                  Happy Customer
                </p>
                <p className="statsItem">
                  <span className="statsNum">28</span>
                  Awards Winning
                </p>
              </div>
            </div>
            <div className="welcomeImgWrapper">
              <img src="./images/cups/green-big.png" alt="StarbucksCup" className="WelcomeImg" />
            </div>
          </div>
        </section>

        <section className="benefits">
          <div className="container benefitsContainer">
            <div className="benefitsItem">
              <div className="benefitsImg">
                <img src="./images/icons/3d/heart.png" alt="heart" />
              </div>
              <div className="benefitsTitle">Tasty</div>
              <div className="benefitsDesc">We have the most delicious coffee</div>
            </div>
            <div className="benefitsItem">
              <div className="benefitsImg">
                <img src="./images/icons/3d/rocket.png" alt="rocket" />
              </div>
              <div className="benefitsTitle">Fast</div>
              <div className="benefitsDesc">Our cafe will serve you quickly</div>
            </div>
            <div className="benefitsItem">
              <div className="benefitsImg">
                <img src="./images/icons/3d/money.png" alt="money" />
              </div>
              <div className="benefitsTitle">Available</div>
              <div className="benefitsDesc">Cafe will serveat the most pleasant prices</div>
            </div>
          </div>
        </section>

        <section className="history">
          <div className="container">
            <div className="historyImg">
              <img src="./images/room.jpg" alt="" />
            </div>
            <div className="historyText">
              <h2 className="title historyTitle">
                We make <span className="textGradient">delecious</span>
              </h2>
              <p className="historyDesc">
                Only in 2021 we have made more than 100,000 orders for you, your loved ones, all of you, and in 2022 we are ready to destroy the market
              </p>
              <img src="./images/kitchen.jpg" alt="kitchen" />
            </div>
          </div>
        </section>

        <section id="Shop" className="products">
          <div className="container">
            <div className="textRow">
              <h2 className="title textRowTitle">
                New Our <br/>
                <span className="textGradient">Starbucks</span>
              </h2>
              <p className="textRowDesc">
                Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount! Starbucks coffee and don't forget about the discount!
              </p>
            </div>
            <div className="productCards">
              <div className="card">
                <div className="cardImgWrapper">
                  <img src="./images/cups/green.png" alt="" />
                </div>
                <p className="cardTitle">Latte</p>
                <p className="cardDesc">Our cafe will serve you quickly</p>
                <div className="cardRow">
                  <div className="cardPrice">7,45$</div>
                  <div className="cardSize">330 ml</div>
                </div>
                <button className="btn cardBtn">Buy Product</button>
              </div>
              <div className="card">
                <div className="cardImgWrapper">
                  <img src="./images/cups/brown.png" alt="" />
                </div>
                <p className="cardTitle">Epresso</p>
                <p className="cardDesc">Our cafe will serve you quickly</p>
                <div className="cardRow">
                  <div className="cardPrice">3,45$</div>
                  <div className="cardSize">330 ml</div>
                </div>
                <button className="btn cardBtn">Buy Product</button>
              </div>
              <div className="card">
                <div className="cardImgWrapper">
                  <img src="./images/cups/yellow.png" alt="" />
                </div>
                <p className="cardTitle">Americano</p>
                <p className="cardDesc">Our cafe will serve you quickly</p>
                <div className="cardRow">
                  <div className="cardPrice">10,45$</div>
                  <div className="cardSize">330 ml</div>
                </div>
                <button className="btn cardBtn">Buy Product</button>
              </div>
              <div className="card">
                <div className="cardImgWrapper">
                  <img src="./images/cups/green.png" alt="" />
                </div>
                <p className="cardTitle">Cappuccino</p>
                <p className="cardDesc">Our cafe will serve you quickly</p>
                <div className="cardRow">
                  <div className="cardPrice">8,45$</div>
                  <div className="cardSize">330 ml</div>
                </div>
                <button className="btn cardBtn">Buy Product</button>
              </div>
            </div>
          </div>
        </section>

        <section className="events">
          <div className="container">
            <div className="textRow">
              <h2 className="title textRowTitle">
                Our New <br/>
                <span className="textGradient">Events</span>
              </h2>
              <p className="textRowDesc">
                Only in 2021 we have made more than 100,000 orders for you, your loved ones, all of you, and in 2022 we are ready to destroy the market
              </p>
            </div>
            <div className="innerWrapper">
              <div className="event event--price">
                <h3 className="eventTitle">TWO COFFEE FOR 1 PRICE</h3>
                <a href="#!" className="btn eventBtn">More</a>
              </div>
              <div className="event event--kitchen">
                <h3 className="eventTitle">
                  Kitchen
                  <br />
                  Tour
                </h3>
                <a href="#!" className="btn eventBtn">More</a>
              </div>
              <div className="event event--free">
                <h3 className="eventTitle">
                  FREE COFFEE FOR 3 COFFEE
                </h3>
                <a href="#!" className="btn eventBtn">More</a>
              </div>
              <div className="event event--social">
                <h3 className="eventTitle">                            
                  Our
                  <br />
                  Socials
                </h3>
                <a href="#!" className="btn eventBtn">More</a>
              </div>
              <div className="event event--choose">
                <h3 className="eventTitle">WHERE ARE YOU CHOOSE US?</h3>
                <a href="#!" className="btn eventBtn">More</a>
              </div>
            </div>
          </div>
        </section>

        <section className="contacts">
          <div className="container">
            <div className="contactsText">
              <h2 className="title contactsTitle">
                Our<br/>
                <span className="textGradient">Contacts</span>
              </h2>
              <p className="contactsDesc">
                Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!
              </p>
              <a href="tel:+7-999-999-99-99" className="ContactsPhone">+7-999-999-99-99</a>
            </div>
            <div className="contactsImgWrapper">
              <img src="./images/signboard.jpg" alt="" />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footerRow">
            <a href="#!" className="textGradient">Starbucks</a>
            <nav className="footerNav">
              <div className="footerNavCol">
                <a href="#!" className="footerNavLink">Main</a>
                <a href="#!" className="footerNavLink">Buy</a>
                <a href="#!" className="footerNavLink">More</a>
              </div>
              <div className="footerNavCol">
                <a href="#!" className="footerNavLink">We make</a>
                <a href="#!" className="footerNavLink">Process</a>
              </div>
              <div className="footerNavCol">
                <a href="#!" className="footerNavLink">Products</a>
                <a href="#!" className="footerNavLink">Cappuccino</a>
                <a href="#!" className="footerNavLink">Fast</a>
                <a href="#!" className="footerNavLink">Latte</a>
              </div>
              <div className="footerNavCol">
                <a href="#!" className="footerNavLink">Events</a>
                <a href="#!" className="footerNavLink">Drinks</a>
                <a href="#!" className="footerNavLink">Eat</a>
              </div>
            </nav>
            <a href="#top">
              <img src="./images/icons/arrow.svg" alt="topArrow" />
            </a>
          </div>
          <a href="tel:++7-999-999-99-99" className="footerPhone">+7-999-999-99-99</a>
        </div>
      </footer>
    </div>
  );
};

export default App