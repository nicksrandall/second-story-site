import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import pic01 from '../images/pic01.jpg'

class Index extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <StaticQuery
        query={graphql`
          query PageQuery {
            site {
              siteMetadata {
                title
                description
              }
            }
          }
        `}
        render={data => (
          <div>
            <Helmet>
              <title>{get(this, 'props.data.site.siteMetadata.title')}</title>
              <meta
                name="description"
                content={get(this, 'props.data.site.siteMetadata.description')}
              />
            </Helmet>
            <Layout location={this.props.location} data={data} />
          </div>
        )}
      />
    )
  }
}

export default Index
