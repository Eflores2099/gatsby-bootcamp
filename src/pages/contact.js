import React from 'react'

import Layout from '../components/layout'
import Head from'../components/head'

const ContactPage = () => {
    return(
        <Layout>
            <Head title= "Contact"/>
            <h1>How to contact me:</h1>
            <p>Twitter:  <a href = "https://www.twitter.com/" target = "_blank">@Erik96636380</a>
            </p>
        </Layout>
    )
}

export default ContactPage