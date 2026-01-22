

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="id-card">
      <div className="card">
        <div><img src={picture} alt="Profile" /></div>
        <div>
        <p><strong>lastName:</strong> {lastName}</p>
        <p><strong>firstName:</strong> {firstName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Height:</strong> {height}</p>
        <p><strong>birth:</strong> {new Date(birth).toDateString()}</p>
        
        </div>
        
      </div>
    </div>
  );
};

export default IdCard;