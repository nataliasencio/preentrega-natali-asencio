export const Card = ({ titulo, desc, precio }) => {
  return (
    <div style={{ border: "2px double green" }}>
      <h2> {titulo} </h2>
      <h3> {desc} </h3>
      <h4> {precio} </h4>
    </div>
  );
};
