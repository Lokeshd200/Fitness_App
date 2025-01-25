import React from 'react'
import aboutImg from '../images/about.png';

const Home = () => {
    return (
        <div>
            <section className='py-5 hero-bg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                            <div className='m-2 py-5' style={{ position: 'relative', top: '90px' }}>
                                <h5 className='text-white fw-bold'>#1 nutrition tracking app</h5>
                                <h1 className='text-white ' style={{ fontSize: '4rem' }} ><span className='fw-bold'>Reach your goals</span> with MyFitnessPal</h1>
                                <p className='text-white lead'>Build healthy habits with the all-in-one food, exercise, and calorie tracker.</p>
                                <div>
                                    <a href='/Sign-up' className='btn btn-outline-light px-5 d-flex py-2 text-btn rounded-pill my-3' style={{ width: '220px' }}>Start Today
                                        <span class="material-symbols-outlined">
                                            chevron_right
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className=' bg-white py-5'>
                <div className='container'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-xs-12 col-sm-12 col-md-5 col-lg-5'>
                            <div className='my-2'>
                             <div className='d-flex align-items-center'>
                                <div className='p-2'>
                                    <img src='https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frunning-full.47a28cc6.png&w=512&q=75' className='img-fluid' />
                                </div>
                                <div className='p-2'>
                                    <img src='https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdietician-large.b7f105f2.png&w=1080&q=75' className='img-fluid rounded-4' />
                                </div>
                                <div className='p-2'>
                                    <img src='https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffood-full.9c63c65e.png&w=512&q=75' className='img-fluid' />
                                </div>
                             </div>
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
                            <div className='my-2'>
                                <p className='text-dark'>Our Philosophy</p>
                                <h2 className='text-dark'>Knowledge is power</h2>
                                <p className='text-dark'>
                                Healthy eating is a continuous journey of self-discovery. And the more you track, the more empowered you’ll become to make healthy choices that support your goals.”
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end of the hero section */}
           
            <section className=' bg-primary'>
                <div className='container'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-xs-12 col-sm-12 col-md-5 col-lg-5'>
                            <div className='my-2'>
                                <h6 className='text-white'>Have 2 mins</h6>
                                <h1 className='text-white ' style={{ fontSize: '3rem' }}>Get your <span className='fw-bold'>personalized daily plan</span> </h1>
                                <a href='/Sign-up' className='btn btn-outline-light px-5 d-flex py-2 text-btn rounded-pill my-3' style={{ width: '220px' }}>Start Today
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span></a>
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
                            <div className='my-2'>
                                <img src='https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdaily-plan.084be84e.png&w=640&q=75' className='img-fluid py-5' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          
            <section className='py-5'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                            <div className='mb-3 text-center'>
                                <h2 className='text-dark'>From our experts</h2>
                          
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-12 col-md-5 col-lg-5'>
                            <div className='my-2'>
                                <div className='bgCard py-3 rounded-5'>
                                    <div className='px-3 py-3'>
                                        <h5 className='text-white'>
                                        Essential Guide to Healthy Eating

                                        </h5>
                                        <p className='text-white'>Save 15% or more when you book and stay before 1 October 2024</p>
                                        <a href='/Login' className=' text-btn btn btn-outline-light rounded-pill px-3 py-2 mt-1'>
                                            Enquire Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-12 col-md-5 col-lg-5'>
                            <div className='my-2'>
                                <div className='bgCard1 py-3 rounded-5'>
                                    <div className='px-3 py-3'>
                                        <h5 className='text-white'>
                                        11 Things You’ll Learn Using MyFitnessPal
                                        </h5>
                                        <p className='text-white'>Brussels is a quick train ride from all the action</p>
                                        <a href='/Sign-up' className=' text-btn btn btn-outline-light rounded-pill px-3 py-2 mt-1'>
                                            Enquire Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end of the section */}
            <section className='py-5 bg-light'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                            <div className='my-3'>
                                <h2 className='text-dark text-center'>
                                Hit your health goals in 1-2-3
                                </h2>
                               
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
                            <div className='my-2'>
                                <div className='MaldivesCard  p-3 rounded-5'>
                                    <div>
                                    <h3 className='text-white'>Track food, fitness & fasting</h3>
                                    <p className='text-white'>
                                    Tracking calories and macros is easy with our barcode scanner and device integration.
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
                            <div className='my-2'>
                                <div className='parisCard p-3 rounded-5'>
                                    <h3 className='text-white'>Learn what works</h3>
                                    <p className='text-white'>
                                    Personalized nutrition insights reveal what's working so you can make smarter choices.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
                            <div className='my-2'>
                                <div className='peruCard p-3 rounded-5'>
                                    <h3 className='text-white'>Change your habits and reach your goals</h3>
                                    <p className='text-white'>
                                    Now you have the tools and knowledge to build healthy habits for life.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='text-center'>
                            <a href='/Sign-up' className='btn btn-primary px-5 py-2 my-3 rounded-pill'>Sign Up Now !</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* end of the section */}
           
            <section className='py-5'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-xs-12 col-sm-12 col-md-10 col-lg-10'>
                            <div className='my-2'>
                                <div className='bg-dark rounded-5 ' >
                                    <div className='d-flex justify-content-around align-items-center'>
                                        <div className='px-4'>
                                            <h6 className='text-white'>35+ Apps and Devices</h6>
                                            <h1 className='text-white'>Sync steps, Weight,<br />Workouts & more</h1>
                                        </div>
                                        <div>
                                            <img src='https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Flogged-out-v2%2Fapp-integrations-large.png&w=1080&q=75' className='img-fluid py-5' style={{ width: '500px' }} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end of the section*/}
            <section className='py-5 bg-primary'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                            <div className='my-2 text-center'>
                                <h3 className='text-white text-center'>
                                    Stay in the Know
                                </h3>
                                <p className='text-white text-center'>
                                MyFitnessPal is one of the best weight loss apps and fitness apps, helping nearly 1 million members reach their nutrition and fitness goals every year. Members use it as a calories tracker and calorie counter to log their foods, and take advantage of the app’s food database that contains over 18 million foods. It’s not just a free calorie counter app — it’s also the best calorie counter app for people who are looking to take back control of their health and fitness.
                                </p>

                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-12 col-md-2 col-lg-2'>
                            <div className='d-flex my-2 justify-content-ceter text-center'>
                                <div>
                                    <a href='#'>
                                        <li className='fa fa-facebook fs-4'></li>
                                    </a>
                                </div>
                                <div className='mx-3'>
                                    <a href='#'>
                                        <li className='fa fa-instagram fs-4'></li>
                                    </a>
                                </div>
                                <div className='mx-3'>
                                    <a href='#'>
                                        <li className='fa fa-twitter fs-4'></li>
                                    </a>
                                </div>
                                <div className='mx-3'>
                                    <a href='#'>
                                        <li className='fa fa-linkedin fs-4'></li>
                                    </a>
                                </div>
                                <div className='mx-3'>
                                    <a href='#'>
                                        <li className='fa fa-youtube fs-4'></li>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}


export default Home;