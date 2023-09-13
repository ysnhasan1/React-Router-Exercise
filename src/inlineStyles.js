// Style objects

const flexContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",

  gap: "20px",
  border: "3px solid black",
  padding: "20px",
  marginTop: "50px"
};

const flexItem = {
  border: "1px solid black",
  borderRadius: "30px",
  padding: "5px",
  textAlign: "center",
  fontSize: "25px",
  fontWeight: "bold",
  fontFamily: "monospace",
  cursor: "pointer",
  width: "200px",
  height: "200px",
  color: "white",
  letterSpacing: "3px",
  boxShadow: "0 2px 5px black",
  backgroundColor: "black"
};

const carStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  fontSize: "25px",

  fontFamily: "'Asap', sans-serif",
  fontFamily: "'Carter One', cursive",

  letterSpacing: "30px",
  color: "navy",
  textTransform: "upperCase"
};

const imgStyle = {
  borderRadius: "20px",
  boxShadow: "0 2px 5px black",
  width: "300px",
  height: "300px",
  objectFit: "contain"
};

export { flexContainer, flexItem, carStyle, imgStyle };