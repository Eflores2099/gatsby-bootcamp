import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>My name is Erik and I am a web Developer from Boulder Colorado.</p>
            <p> I love reading comics, cooking, and building things with ReactJS.</p>
            <p>If you need to contact me or need a web developer, I can be reached  <Link to= "/contact">here.</Link></p>    
        </Layout>
    )
}

export default AboutPage