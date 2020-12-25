import "./Footer.css";

function Footer(props) {
  let background = props.loc
    ? { color: "#eee" }
    : { color: "black", backgroundColor: "white" };
  return (
    <div className="footer" style={background}>
      <p>Built with &hearts; | Copyright &copy; Covid-19 Tracker 2020</p>
    </div>
  );
}

export default Footer;
