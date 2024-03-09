const p = {
  person: {
    name: "Lin Lanying",
    imageId: "1bX5QH6",
  },
  size: 100,
};
function Avatar({ person, size=0 }) {
  return (
    <div>
      <div>
        <h1>{person}</h1>
        
        <p>{size}</p>
      </div>
    </div>
  );
}
export default Avatar;
