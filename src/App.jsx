import React, { Suspense, lazy } from 'react';
import Header from './assets/components/Header'
import { Home } from './assets/pages/Home.jsx'
import '@fontsource-variable/sansita-swashed';
import ApiProvider from './assets/context/ApiProvider.jsx'

// Lazy loaded components for performance optimization
const About = lazy(() => import('./assets/pages/About.jsx').then(module => ({ default: module.About })));
const Education = lazy(() => import('./assets/pages/Education.jsx'));
const Skill = lazy(() => import('./assets/pages/Skill.jsx'));
const Project = lazy(() => import('./assets/pages/Project.jsx'));
const Contact = lazy(() => import('./assets/pages/Contact.jsx').then(module => ({ default: module.Contact })));

function App() {
    return (
        <ApiProvider>
            {/* <div className="relative bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-x-hidden"> */}
                <Header />
                <Home />
                <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center dark:bg-slate-950 bg-slate-50"><div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div></div>}>
                    <About />
                    <Education />
                    <Skill />
                    <Project />
                    <Contact />
                </Suspense>
            {/* </div> */}
        </ApiProvider>
    )
}

export default App
