'use client';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import styles from '@/app/home.module.css';

export default function Splidecarousel() {
    return(
        <Splide
        options = {{
            type: 'loop',
            perPage: 3,
            gap: '1rem',
            autoplay: true,
            pauseOnHover: true,
            breakpoints: {
                800: {
                    perPage: 1,
                }
            }
        }}
        aria-label = "My Projects"
        >
            <SplideSlide>
                <div className={styles.project}>
                <a href="https://minify-ecru.vercel.app">
                    <img src="minify.png" alt="minify store" />
                    <br></br>
                    <h4>Minify store</h4>
                    <p>Minify is a full-stack e-commerce web application featuring a React frontend and a Flask backend, with integrated real-time 
            payment processing via Paystack. </p>
                     </a>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className={styles.project}>
                <a href="https://hanover-health.vercel.app">
                    <img src="hanover_desktop.png" alt="hanover" />
                    <br></br>
                    <h4>Hanover diseases tracker</h4>
                    <p>Hanover Healthcare is a public-health information and data-visualization application focused on communicable diseases. 
                The project uses a two-part architecture: World Health Organization (WHO) GHO … </p>
                     </a>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className={styles.project}>
                <a href="https://sunny-blond.vercel.app/">
                    <img src="Sunny.png" alt="sunny" />
                    <br></br>
                    <h4>ffmpeg WASM media processor</h4>
                    <p>A browser-based video compression and format conversion tool built with React, TypeScript, and ffmpeg.wasm. 
                All processing happens entirely client-side </p>
                     </a>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className={styles.project}>
                <a href="https://scheduler-one-beta.vercel.app/">
                    <img src="Production-scheduler.png" alt="Production-scheduler" />
                    <br></br>
                    <h4>Production-scheduler</h4>
                    <p>A full-stack production scheduling application built to help manufacturing 
                teams organize production orders, allocate resources, prevent scheduling conflicts, and visualize production performance through dashboards and analytics..</p>
                     </a>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className={styles.project}>
                <a href="https://solarscript-nextjs.vercel.app">
                    <img src="solarscript.png" alt="solar site" />
                    <br></br>
                    <h4>Solarscript</h4>
                    <p>4 page design of a solar, electrical and air conditioner installation company.
                     Built with react, bootstrap and Next.js and hosted on vercel</p>
                     </a>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className={styles.project}>
                <a href="https://biccas-mocha.vercel.app/">
                    <img src="Biccas.png" alt="Biccas" />
                    <br></br>
                    <h4>Biccas landing page</h4>
                    <p>Built a responsive web interface from a Figma design using Next.js, TypeScript, and Tailwind CSS, with a focus on clean UI and reusable components.</p>
                     </a>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className={styles.project}>
                <a href="https://krea-self.vercel.app/">
                    <img src="Krea.png" alt="krea" />
                    <br></br>
                    <h4>Krea landing page</h4>
                    <p>A recreation of the Krea AI interface built from a Figma/design reference using Next.js, TypeScript, and Tailwind CSS. The project focuses on translating 
                    the original visual design into a responsive web interface while implementing reusable React components, responsive layouts, dark/light mode, and an interactive content carousel.</p>
                     </a>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className={styles.project}>
                <a href="https://learnexa.netlify.app">
                    <img src="Learnexa.png" alt="learnexa" />
                    <br></br>
                    <h4>Learnexa</h4>
                    <p>A design of an e-learning platform with a login/sign up page and a user dashboard.
                     Built with html5, CSS, javascript, Python and flask framework.</p>
                     </a>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className={styles.project}>
                <a href="https://pureluxe.netlify.app">
                    <img src="Pureluxe.png" alt="pureluxe web" />
                    <br></br>
                    <h4>Pureluxe</h4>
                    <p>single page User interface design of a body care and cosmetics products website.
                     Built with html5, CSS, bootstrap, and javascript</p>
                     </a>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className={styles.project}>
                <a href="https://rakuten-two.vercel.app">
                    <img src="rakuten.png" alt="rakuten" />
                    <br></br>
                    <h4>Rakuten</h4>
                    <p>Redesign and replication of the home page of the official website of Rakuten stores.
                     Built with html5, CSS, and bootstrap</p>
                     </a>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className={styles.project}>
                <a href="https://weather-app-two-kappa-68.vercel.app">
                    <img src="weather app p1.png" alt="weather app" />
                    <br></br>
                    <h4>Weather App</h4>
                    <p>A functional weather app with integration of openweather api for realtime weather 
                    updates. Built with React</p>
                    </a>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className={styles.project}>
                <a href="https://eustacequizapp.netlify.app">
                    <img src="Quiz.png" alt="quiz app" />
                    <br></br>
                    <h4>Quiz app</h4>
                    <p>single page quiz app with questions and options and score assessment at the end of it.
                     built with simple html5, CSS, and javascript.</p>
                     </a>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className={styles.project}>
                <a href="https://croix-stores.netlify.app">
                    <img src="Croix stores and 9 more pages - Personal - Microsoft​ Edge 7_11_2025 9_03_06 PM.png" alt="croix stores" />
                    <br></br>
                    <h4>Croix stores</h4>
                    <p>Responsive single page e-commerce website built with html, CSS and javascript.</p>
                     </a>
                </div>
            </SplideSlide>
        </Splide>
    );
}



