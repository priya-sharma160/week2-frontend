
const Random = ({ min, max }) => {
  return (
    <div className="card">
      <div className="fonts">Random number between {min} and {max} => {Math.floor(Math.random() * (max - min + 1)) + min}</div>
    </div>
  );
};

export default Random;