import React from "react";
import { Slider } from "infinite-react-carousel/lib";
import "./Gig.css"; // Importing CSS styles

function Gig() {
  // Mock data for features (you may replace this with actual data fetched from an API)
 // const data = {
  //  features: [
   //   { id: 1, name: "Prompt writing" },
   //   { id: 2, name: "Unique designs" },
  //    { id: 3, name: "High quality output" },
  //  ],
 // };

  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          {/* Breadcrumbs */}
          <span className="breadcrumbs">
            Fiverr &gt; Graphics & Design &gt;
          </span>
          {/* Gig Title */}
          <h1>I will create AI-generated art for you</h1>

          {/* User Profile */}
          <div className="user">
            <img className="pp" alt="Profile Picture" src="" />
            <span>John</span>
            {/* Star rating */}
            <div className="stars">
              {/* Placeholder for star images */}
              <img src="/img/star.png" alt="Star" />
              <img src="/img/star.png" alt="Star" />
              <img src="/img/star.png" alt="Star" />
              <span>5</span>
            </div>
          </div>

          {/* Slider for images */}
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            {/* Placeholder for slider images */}
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </Slider>

          {/* About This Gig */}
          <h2>About This Gig</h2>
          <p>
            I use AI to generate unique and high-quality art pieces. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Harum, officia nihil
            delectus sint veniam numquam eligendi incidunt quam aut ullam, nulla
            odio cumque commodi consequatur molestiae fuga debitis voluptates
            quia.
          </p>
        </div>

        {/* Seller Information */}
        <div className="seller">
          <h2>About The Seller</h2>
          <div className="user">
            <img src="" alt="Seller Profile Picture" />
            <div className="info">
              <span>John</span>
              {/* Star rating for seller */}
              <div className="stars">
                <img src="/img/star.png" alt="Star" />
                <img src="/img/star.png" alt="Star" />
                <img src="/img/star.png" alt="Star" />
                <img src="/img/star.png" alt="Star" />
                <img src="/img/star.png" alt="Star" />
                <span>5</span>
              </div>
              <button>Contact Me</button>
            </div>
          </div>

          {/* Additional Seller Information */}
          <div className="box">
            <div className="items">
              <div className="item">
                <span className="title">From</span>
                <span className="desc">USA</span>
              </div>
              <div className="item">
                <span className="title">Member since</span>
                <span className="desc">Aug 2022</span>
              </div>
              <div className="item">
                <span className="title">Avg. response time</span>
                <span className="desc">4 hours</span>
              </div>
              <div className="item">
                <span className="title">Last delivery</span>
                <span className="desc">1 day</span>
              </div>
              <div className="item">
                <span className="title">Languages</span>
                <span className="desc">English</span>
              </div>
            </div>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Facilis ipsam et ut nihil rem tempora, velit assumenda esse est
              recusandae quis a, consequatur soluta odit cum aut eum dignissimos
              quos?
            </p>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="reviews">
          <h2>Reviews</h2>
          <div className="item">
            <div className="user">
              <img className="pp" src="" alt="Review Profile Picture" />
              <div className="info">
                <span>John</span>
                <div className="country">
                  <img src="" alt="Country Flag" />
                  <span>United States</span>
                </div>
              </div>
            </div>
            {/* Star rating for review */}
            <div className="stars">
              <img src="/img/star.png" alt="Star" />
              <img src="/img/star.png" alt="Star" />
              <img src="/img/star.png" alt="Star" />
              <img src="/img/star.png" alt="Star" />
              <img src="/img/star.png" alt="Star" />
              <span>5</span>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
              soluta? Eaque nobis possimus placeat reprehenderit ipsa ad iure
              sequi! Laboriosam doloribus eveniet quibusdam! Dolores temporibus
              vero iure, modi optio numquam.
            </p>
            <div className="helpful">
              <span>Helpful?</span>
              <img src="/img/like.png" alt="Like" />
              <span>Yes</span>
              <img src="/img/dislike.png" alt="Dislike" />
              <span>No</span>
            </div>
          </div>
          <hr />
        </div>
      </div>

      {/* Sidebar with price and details */}
      <div className="right">
        <div className="price">
          <h3>1 AI generated image</h3>
          <h2>$60.99</h2>
        </div>
        <p>
          I will create a unique high-quality AI-generated image for you. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Alias illum quo
          distinctio eligendi iste perspiciatis laborum molestias rerum, labore
          doloremque cumque. Illo error aliquid, maiores eaque molestiae autem
          neque debitis.
        </p>
        {/* Details section */}
        <div className="details">
          <div className="item">
            <img src="/img/clock.png" alt="Clock" />
            <span>2 Days Delivery</span>
          </div>
          <div className="item">
            <img src="/img/recycle.png" alt="Revisions" />
            <span>3 Revisions</span>
          </div>
        </div>
        {/* Features section */}
        <div className="features">
          {data.features.map((feature) => (
            <div className="item" key={feature.id}>
              <img src="/img/greencheck.png" alt="Feature" />
              <span>{feature.name}</span>
            </div>
          ))}
        </div>
        {/* Continue button */}
        <button>Continue</button>
      </div>
    </div>
  );
}

export default Gig;

/*
import React from "react";
import "./Gig.css";
import { Slider } from "infinite-react-carousel/lib";
//import { Link, useParams } from "react-router-dom";
//import { useQuery } from "@tanstack/react-query";
//import newRequest from "../../utils/newRequest";
////import Reviews from "../../components/reviews/Reviews";

function Gig() {
  //const { id } = useParams();

  // const { isLoading, error, data } = useQuery({
  //  queryKey: ["gig"],
  // queryFn: () =>
  //   newRequest.get(`/gigs/single/${id}`).then((res) => {
  //    return res.data;
  //  }),
  //});

  //const userId = data?.userId;

  // const {
  //   isLoading: isLoadingUser,
  //  error: errorUser,
  //  data: dataUser,
  // } = useQuery({
  //queryKey: ["user"],
  // queryFn: () =>
  //   newRequest.get(`/users/${userId}`).then((res) => {
  //      return res.data;
  //    }),
  //  enabled: !!userId,
  //  });

  return (
    <div className="gig">

      <div className="container">
        <div className="left">
          <span className="breadcrumbs">
            Fiverr {">"} Graphics & Design {">"}
          </span>
          <h1>i will create ai generated art for you</h1>

          <div className="user">
            <img 
              alt=""
              className="pp"  src=""  />

            <span>john</span>
            <div className="stars"></div>
          

            <img src="/img/star.png" alt=""  />
            <img src="/img/star.png" alt=""  />
            <img src="/img/star.png" alt=""  />
           
          
            <span>5</span>
          </div>
                
        </div>
           
        <Slider slidesToShow={1} arrowsScroll={1} className="slider">
         
            <img key="" src="" alt="" />
            <img key="" src="" alt="" />
            <img key="" src="" alt="" />
      
        </Slider>
        <h2>About This Gig</h2>
        <p>i use an Ai Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, officia nihil delectus sint veniam numquam eligendi incidunt quam aut ullam, nulla odio cumque commodi consequatur molestiae fuga debitis voluptates quia.</p>
        
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img src="" alt="" />
              <div className="info">
                <span>john</span>
               
                  <div className="stars">
                    
                        <img src="/img/star.png" alt=""  />
                        <img src="/img/star.png" alt=""  />
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt=""  />
                     
                    <span>
                      5
                    </span>
                  </div>
               
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">Usa</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ipsam et ut nihil rem tempora, velit assumenda esse est recusandae quis a, consequatur soluta odit cum aut eum dignissimos quos?</p>
            </div>
          </div>
        
       <div className="reviews">
        <h2>Reviews</h2>
        <div className="item">
          <div className="user">
            <img className="pp" src="" alt="" />
            <div className="info">
              <span>john</span>
              <div className="country">
                <img src="" alt="" />
                <span>United state</span>
              </div>
            </div>
          </div>
          <div className="stars">
                    
                        <img src="/img/star.png" alt="" key={i} />
                        <img src="/img/star.png" alt="" key={i} />
                        <img src="/img/star.png" alt="" key={i} />
                        <img src="/img/star.png" alt="" key={i} />
                        <img src="/img/star.png" alt="" key={i} />
                     
                    <span>
                      5
                    </span>
                  </div>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, soluta? Eaque nobis possimus placeat reprehenderit ipsa ad iure sequi! Laboriosam doloribus eveniet quibusdam! Dolores temporibus vero iure, modi optio numquam.</p>
                  <div className="helpful">
                    <span>Helpful?</span>
                    <img src="/img/like.png" alt="" />
                   
                    <span>Yes</span>
                    <img src="/img/dislike.png" alt="" />
                    <span>No</span>
                  </div>
        </div>
        <hr />
       </div>
      </div>
     
      <div className="right">
        <div className="price">
          <h3>1 AI gerated image</h3>
          <h2>$ 60.99</h2>
        </div>
        <p>i willl create a unique high quality AI generated image Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias illum quo distinctio eligendi iste perspiciatis laborum molestias rerum, labore doloremque cumque. Illo error aliquid, maiores eaque molestiae autem neque debitis.</p>
        <div className="details">
          <div className="item">
            <img src="/img/clock.png" alt="" />
            <span>2 Days Delivery</span>
          </div>
          <div className="item">
            <img src="/img/recycle.png" alt="" />
            <span>3 Revisions</span>
          </div>
        </div>
        <div className="features">
          {data.features.map((feature) => (
            <div className="item" >
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt writing</span>
            </div>
          ))}
        </div>
        
          <button>Continue</button>
        
      </div>
    </div>
  )
}
    </div >
     
    
  );
}

export default Gig;
//*/
