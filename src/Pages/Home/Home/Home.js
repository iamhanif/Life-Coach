import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <div>
                <div className="card grid grid-cols-2 my-5 bg-base-100 shadow-xl">
                    <figure><img src="https://www.noomii.com/assets/articles/life-01-aeac9a0179633502f660dcb180c076835f872d1ec44c5d5d2b3ef004307ce4af.jpg" alt="Album" /></figure>

                    <div className="card-body">
                        <p>What Is a Life Coach?
                            A life coach is a type of wellness professional who helps people make progress in their lives in order to attain greater fulfillment. Life coaches aid their clients in improving their relationships, careers, and day-to-day lives.
                            What Does a Life Coach Do?
                            Life coaches can help you clarify your goals, identify the obstacles holding you back, and then come up with strategies for overcoming each obstacle.


                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="card grid grid-cols-2 my-5 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p>WWhat a Life Coach Can Do for You
                            One of the main benefits of working with a life coach is the ability to gain a fresh, informed perspective on problems that you face. In addition to offering new insight into challenges, a life coach can help you to zero in on negative patterns that could be standing in the way of your success.

                            Many people view working with a life coach as a means of bridging the gap between your current circumstances and the life you’d like to lead. The following are some of the benefits that may result from having a life coach:
                        </p>
                    </div>
                    <figure><img src="https://i0.wp.com/www.invoiceberry.com/blog/wp-content/uploads/2016/12/feature-business-guide-life-coaching.jpg" alt="Album" /></figure>
                </div>
            </div>
        </div>
    );
};

export default Home;