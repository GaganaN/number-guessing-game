function Card({item, id, handleClick}){
    const itemClass = item.stat ? "active" + item.stat : " ";
    return (
        <div className ={"card" + itemClass} onClick={() => handleClick(id)}>
            <a src = {item.placeholder}></a>
        </div>
    )
}

export default Card;