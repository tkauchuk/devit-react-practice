import NavigationItem from "../NavigationItem";

export const Navigations = ({className, items}) => {
    return (
        <nav className="nav">
            <ul className={className}>
                {
                    items.map((item, index) => {
                        return <NavigationItem title={item.title} href={item.href} key={index}/>
                    })
                }
            </ul>
        </nav>
    )
}