//props are immutable means non-changable
function Avatar(props) {
  return (
    <div>
      <div>
       <h1>Profile: {props.age}</h1>
      </div>
    </div>
  );
}
export default Avatar;
