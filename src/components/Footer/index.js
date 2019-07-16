import React from 'react'
import config from '../../../config'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='content has-text-centered'>
          <p>
            {config.copyright}
          </p>
          <p>Powered by <a href='https://epic-shirley-a4fc4a.netlify.com'>Grindstein Development</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
