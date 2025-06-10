import miFoto from './assets/mi-foto.jpg';
function Tarjeta({ nombre, profesion, mensaje }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', width: '300px', textAlign: 'center' }}>
      <img src={miFoto} alt="Foto de perfil" style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
      <h2>{nombre}</h2>
      <h4>{profesion}</h4>
      <p>{mensaje}</p>
    </div>
  );
}

export default Tarjeta;
