import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Error() {
  document.body.style.background = "#30352B";

  return (
    <div>
      <h1 className="mangoText">Error 404 Page Not Found</h1>
    </div>
  );
}
