import { Outlet } from "react-router-dom"
import Main from "./Main"
export default function Layout({ content }) {
  return (
    <div id="container">
      <header>
        <h1>Ressursarkiv</h1>
      </header>
      <nav id="navBar">
        <Outlet />
      </nav>
      <main id="mainInfo">
        <Main content={content} />
      </main>
    </div>
  )
}