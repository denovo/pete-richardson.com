import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'

class Bio extends React.Component {
  render () {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={prefixLink('/static/img/profile-pic.jpg')}
          alt={`author ${config.authorName}`}
          width="46"
          height="46"
          style={{
            float: 'left',
            marginRight: rhythm(1/4),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        Written by <strong>{config.authorName}</strong> - a Web Developer from the <em>sometimes</em> green and pleasant land of England. <br/>Website built on GatsbyJS and hosted on Github Pages. <br/><a href="https://twitter.com/de_novo_me">Pete on Twitter</a> &nbsp; <a href="https://github.com/denovo">Pete on Github</a>
        <br/><small>Record player icon made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 </a></small>
      </p>
    )
  }
}

export default Bio
