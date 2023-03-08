
export default function Navigation({ resources, navigate, category }) {
    resources.map(category => {
        return (
            <>
                <button className="button" onClick={navigate}>{resources.category.category}</button>

            </>
        )
    })
}