function MyImage() {
  let myPath = "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Nature</h1>
      <img
        src={myPath}
        width="300px"
        alt="nature"
        style={{ display: "block", margin: "auto" }}
      />
    </div>
  );
}
export default MyImage;
;
