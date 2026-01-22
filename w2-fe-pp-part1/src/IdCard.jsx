

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="id-card">
      <div className="card">
        <div><img src={picture} alt="Profile" /></div>
        <div className="info">
          <div><b>First Name:</b> {firstName}</div>
        <div><strong>Last Name:</strong> {lastName}</div>
        <div><strong>Gender:</strong> {gender}</div>
        <div><strong>Height:</strong> {height}</div>
        <div><strong>Birth:</strong> {new Date(birth).toDateString()}</div>
        
        </div>
        
      </div>
    </div>
  );
};

export default IdCard;