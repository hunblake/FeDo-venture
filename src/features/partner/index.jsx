import React from 'react';
import PropTypes from 'prop-types';

import { Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './styles.scss'

Partner.propTypes = {
    data: PropTypes.array,
};

function Partner(props) {

    const {data} = props;

    return (
        <section className="tf-section partner">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tf-title" data-aos="fade-up" data-aos-duration="800">
                            <p className="h8 sub-title">Portfolio</p>
                            <h4 className="title">FeDo's Investment Portfolio</h4>
                            <p> Examine a few standout projects and startups in our portfolio that impacted the crypto and web3 ecosystem, thanks to FeDo's support and resources</p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="item-parner" data-aos="fade-up" data-aos-duration="800">
                            <Swiper
                                modules={[Scrollbar, A11y, Autoplay]}
                                spaceBetween={60}
                                scrollbar={{ draggable: true }}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                speed={1000}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 2,
                                    },
                                    767: {
                                        slidesPerView: 4,
                                    },
                                    991: {
                                        slidesPerView: 6,
                                    },
                                }}
                            >
                                {
                                    data.slice(0,9).map((item,idx) => (
                                        <SwiperSlide key={idx}>
                                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                <div className="image">
                                                    <img src={item.img} alt="Crybox" />
                                                </div>
                                            </a>
                                        </SwiperSlide>
                                        
                                    ))
                                }
                            </Swiper>
                            <Swiper
                                modules={[Scrollbar, A11y, Autoplay]}
                                spaceBetween={60}
                                scrollbar={{ draggable: true }}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                speed={1000}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 2,
                                    },
                                    767: {
                                        slidesPerView: 4,
                                    },
                                    991: {
                                        slidesPerView: 6,
                                    },
                                }}
                            >
                                {
                                    data.slice(9,18).map((item,idx) => (
                                        <SwiperSlide key={idx}>
                                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                <div className="image">
                                                    <img src={item.img} alt="Crybox" />
                                                </div>
                                            </a>
                                        </SwiperSlide>
                                        
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Partner;
