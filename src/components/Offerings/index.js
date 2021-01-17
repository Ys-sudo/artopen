import React from 'react'
import PropTypes from 'prop-types'


const Offerings = (props) => {
  const { gridItems } = props
  return (
    <div className='columns is-multiline'>
      {gridItems.map((item, idx) => (
        <div key={idx} className='column is-6' style={{ borderRadius: '5px' }}>
          <section className='section'>
            <p className='has-text-centered'>
              <img
                src={item.image.publicURL}
                alt={`ArtOpen-${idx}`}
                style = {{width:'100px'}}
              />
            </p>
            <p>{item.text}</p>
          </section>
        </div>
      ))}
    </div>
  )
}
Offerings.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.image,
      text: PropTypes.string,
    }),
  ),
}

export default Offerings
