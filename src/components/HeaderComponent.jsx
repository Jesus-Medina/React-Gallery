import "../stylesheet/headerComponent.css"

function HeaderComponent({ title, image }) {
  return (
      <div className="p-3 bg-dark header-container">
        <h2 className="mb-0">{title} <img src={image} alt="logo de react" /></h2>
      </div>
  )
}

export default HeaderComponent