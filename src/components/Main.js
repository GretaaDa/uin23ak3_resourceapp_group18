import { useLocation } from "react-router-dom"

export default function Main({ content }) {
    const location = useLocation().pathname.substring(1)
    const links = content.filter((item) => item.category == location)
    return (<>
        <h2>
            {location}
        </h2>
        <ul>
            {links.map((item) =>
                <li key={item.title}>
                    <a href={item.url}>{item.title}</a>
                </li>
            )}
        </ul>
    </>
    )
}