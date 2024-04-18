/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function Guitar({ guitar, addToCart}) {
  const { id, name, image, description, price } = guitar;

  //El template es para presentar informacion, mostrar tus componentes, no para hacer lógica
  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img
          className="img-fluid"
          src={`./img/${image}.jpg`}
          alt="imagen guitarra"
        />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
        <p>{description}</p>
        <p className="fw-black text-primary fs-3">${price}</p>
        <button 
          type="button" 
          className="btn btn-dark w-100"
          onClick={() => addToCart(guitar)}
          >Agregar al Carrito
        </button>
      </div>
    </div>
  );
}

export default Guitar;

// onClick={() => handleClick(id)} colocamos un colback arrow fuction para que el evento no se mande a llamar automaticamente
// si no cuando el usuario hace chick