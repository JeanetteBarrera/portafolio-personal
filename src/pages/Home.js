import React from 'react';
import Initial from '../components/Initial/Initial';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import './Home.css';

const Home = () => {
    return(
        <main className="App">
            <Initial />
            <About />
            <Skills />
            <Projects />
        </main>
    )
}
export default Home;
