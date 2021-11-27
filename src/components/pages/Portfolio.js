import React from 'react';
import blog from "../assets/projects/blog.png";
import budget from "../assets/projects/budget.png";
import etchasketch from "../assets/projects/etchasketch.png";
import fitness from "../assets/projects/fitness.png";
import geojobs from "../assets/projects/geojobs.PNG";
import scheduler from "../assets/projects/scheduler.png";
import todocamp from "../assets/projects/todocamp.png";
import weather from "../assets/projects/weather.png";


export default function Portfolio() {
  return (
    <div>
        <h1 class="uk-heading-line uk-text-center">
            <span>Portfolio</span>
        </h1>

        <div className="uk-slider-container-offset" id="portfolio-container" data-uk-slider="center: true">

            <div className="uk-position-relative uk-visible-toggle uk-dark" tabindex="-1">

                <ul className="uk-slider-items uk-child-width-1-2@s uk-grid">
                    <li>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src={geojobs} alt="Screenshot of GeoJobs application"/>
                            </div>
                            <div className="uk-card-body">
                                <h2 className="uk-card-title">
                                    <a className="no-decoration" href="https://lewischatham.github.io/GeoJobs/">GeoJobs</a> | <a className="no-decoration" href="https://github.com/LewisChatham/GeoJobs">Repo</a>
                                </h2>
                                <p>A job-search site that allows you to view the radius in which you are searching for a job on a map.</p>
                                <p>My role: Developed search/filter functionality and map radius functionality</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src={todocamp} alt="Screenshot of 2DoCamp application"/>
                            </div>
                            <div class="uk-card-body">
                                <h2 className="uk-card-title">
                                    <a className="no-decoration" href="https://to-do-camp.herokuapp.com/">2DoCamp</a> | <a className="no-decoration" href="https://github.com/meljack1/2DoCamp">Repo</a>
                                </h2>
                                <p>A full-stack to-do list application created as a group, aimed at coding bootcamp students.</p>
                                <p>My role: Authentication, models, to-do list functionality</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src={scheduler} alt="Screenshot of scheduler application"/>
                            </div>
                            <div className="uk-card-body">
                                <h2 className="uk-card-title">
                                    <a className="no-decoration" href="https://meljack1.github.io/workday-scheduler/">Scheduler</a> | <a className="no-decoration" href="https://github.com/meljack1/workday-scheduler">Repo</a>
                                </h2>
                                <p>A workday scheduler built to familiarise myself with local storage, jQuery and Bootstrap.</p>
                                <p>My role: JavaScript/jQuery functionality</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src={blog} alt="Screenshot of tech blog application"/>
                            </div>
                            <div className="uk-card-body">
                                <h2 className="uk-card-title">
                                    <a className="no-decoration" href="https://mels-musings.herokuapp.com/">Blog</a> | <a className="no-decoration" href="https://github.com/meljack1/tech-blog">Repo</a>
                                </h2>
                                <p>A tech blog created to familiarise myself with the MVC framework.</p>
                                <p>My role: Sole creator</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src={budget} alt="Screenshot of budgeting application"/>
                            </div>
                            <div className="uk-card-body">
                                <h2 className="uk-card-title">
                                    <a className="no-decoration" href="https://mels-budget-tracker.herokuapp.com/">Budget</a> | <a className="no-decoration" href="https://github.com/meljack1/budget-tracker">Repo</a>
                                </h2>
                                <p>A budget tracker created to familiarise myself with the structure of a PWA.</p>
                                <p>My role: Refactoring into a PWA</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src={etchasketch} alt="Screenshot of etch-a-sketch application"/>
                            </div>
                            <div className="uk-card-body">
                                <h2 className="uk-card-title">
                                    <a className="no-decoration" href="https://meljack1.github.io/etch-a-sketch/">Etch-a-Sketch</a> | <a className="no-decoration" href="https://github.com/meljack1/etch-a-sketch">Repo</a>
                                </h2>
                                <p>An etch-a-sketch built in vanilla JavaScript, to improve my core JavaScript knowledge.</p>
                                <p>My role: Sole creator</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src={fitness} alt="Screenshot of fitness tracker application"/>
                            </div>
                            <div className="uk-card-body">
                                <h2 className="uk-card-title">
                                    <a className="no-decoration" href="https://mels-fitness-tracker.herokuapp.com/">Fitness</a> | <a className="no-decoration" href="https://github.com/meljack1/fitness-tracker">Repo</a>
                                </h2>
                                <p>A fitness tracker created to familiarise myself with MongoDB and Mongoose databases.</p>
                                <p>My role: Back-end development</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src={weather} alt="Screenshot of weather search application"/>
                            </div>
                            <div className="uk-card-body">
                                <h2 className="uk-card-title">
                                    <a className="no-decoration" href="https://meljack1.github.io/weather-dashboard/">Weather</a> | <a className="no-decoration" href="https://github.com/meljack1/weather-dashboard">Repo</a>
                                </h2>
                                <p>A weather application which I built to improve my knowledge of third-party API integration</p>
                                <p>My role: Sole creator</p>
                            </div>
                        </div>
                    </li>
                </ul>

                <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>

            </div>
            <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
        </div>
    </div>
  );
}
