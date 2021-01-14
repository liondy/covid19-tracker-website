import "./Footer.css";

function Footer(props) {
  let addedStyle = props.loc
    ? { color: "#eee", position: "fixed" }
    : { color: "black", backgroundColor: "white", position: "relative" };
  return (
    <div className="footer" style={addedStyle}>
      <p>Built with &hearts; | Copyright &copy; Covid-19 Tracker 2020</p>
    </div>
  );
}

export default Footer;
