// React and Redux imports
import React from 'react'

// import React-Bootstrap components

function footer () {
  return (

    <>
      <footer id="footer" className="fixed-bottom bg-dark d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
          </a>
          <span className="text-light">© 2021 Argumentum Veritas</span>
        </div>
      </footer>
    </>
  )
}

export default footer
