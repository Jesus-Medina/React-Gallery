import "../stylesheet/footerComponent.css"

function FooterComponent(props) {
  return (
      <footer className="mt-5 p-4 bg-dark">
        <div className="row">
          <div className="fs-5 col-xl-6 col-sm-12">
            <h3>{props.title}</h3>
            <hr />
            <p>{props.description}</p>
          </div>
          <div className="col-xl-6 col-sm-12 my-auto">
            <img className="text-white-50" src={props.logo} alt="icoco de doge"/>
            <p className="fs-6 text-white-50 w-75 mx-auto">
              <img src={props.copyleft} alt="icono copyleft" />
              {props.copyleftDescriptionOne}
              <a rel="noreferrer" className="ms-1" href={props.licenceLink} target="_blank">{props.licence} </a>
            </p>
            <a rel="noreferrer" href={props.sourceLink} className="btn btn-primary btn-sm" target="_blank"><img src={props.github} alt="icono github"/>{props.source}</a>
          </div>
        </div>
      </footer>
  )
}

export default FooterComponent