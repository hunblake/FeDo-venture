import React from 'react';
import '../scss/components/section.scss';
import '../scss/components/box.scss';
import Slider from '../components/slider';
import dataSlider from '../assets/fake-data/data-slider';
import About from '../features/about';
import Project from '../features/project';
import dataProject from '../assets/fake-data/dataProject';
import dataAbout from '../assets/fake-data/data-about';
import RoadMap from '../features/roadmap';
import dataRoadmap from '../assets/fake-data/data-roadmap';
import Work from '../features/work';
import dataWork from '../assets/fake-data/data-work';
import Team from '../features/team';
import dataTeam from '../assets/fake-data/data-team';
import Blog from '../features/blog';
import dataBlog from '../assets/fake-data/data-blog';
import Partner from '../features/partner';
import dataPartner from '../assets/fake-data/data-partner';
import FAQ from '../features/faq';
import dataFaq from '../assets/fake-data/data-faq';

function HomeOne(props) {
    return (
        <div className='home-1'>
            <div id="home">
                <Slider data={dataSlider} />
            </div>

            <div id="about">
                <About data={dataAbout} />
            </div>

            {/* <Project data={dataProject} /> */}

            <div id="services">
                <RoadMap data={dataRoadmap} />
            </div>

            {/* <Work data={dataWork} /> */}

            <div id="team">
                <Team data={dataTeam} />
            </div>

            {/* <Blog data={dataBlog} /> */}

            <div id="portfolio">
                <Partner data={dataPartner} />
            </div>

            <FAQ data={dataFaq} />
        </div>
    );
}

export default HomeOne;
