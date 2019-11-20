import React from 'react';
import Layout from './Components/Layout';
import Blog from './Components/Blog'

class Index extends React.Component {
    render(){
        return(
            <Layout>
                <Blog />
            </Layout>
    )}
}
export default Index;