import NavBar from "../components/NavBar";

export default function About() {
  document.body.style.background = "#30352B";

  return (
    <>
      <NavBar />
      <p className="mangoText">About us!</p>
    </>
  );
}
