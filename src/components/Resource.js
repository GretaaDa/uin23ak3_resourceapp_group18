import { Link } from "react-router-dom"

export default function Resource({ resources, props }) {
    const categories = [...new Set(resources.map((item) => item.category))]

    return <>
        {
            categories.map((item) =>
                <button className={props.category == item ? "active" : ""} key={item}>
                    <Link className="buttonLink" to={"/" + item}>{item}</Link>
                </button>
            )


        }
    </>
}