import React from 'react'
import PropTypes from 'prop-types'

function MovingNotice({ message }) {
  return (
    <div className="bottom-0 w-full flex justify-center py-2 px-5 bg-red-700 text-white">
      <div className="relative w-full overflow-hidden whitespace-nowrap">
        <div className="inline-block marquee">
          <span className="marquee-content">{message}</span>
          <span className="marquee-content">{message}</span>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 15s linear infinite;
        }
        .marquee-content {
          padding-right: 100%;
        }
      `}</style>
    </div>
  )
}

MovingNotice.propTypes = {
  message: PropTypes.string.isRequired,
}

MovingNotice.defaultProps = {
  message: 'NOTE: This is just a demo site. This is not a final outcome ',
  message: 'NOTE: This is just a demo site. This is not a final outcome ',
}

export default MovingNotice
