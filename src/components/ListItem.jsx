import React from 'react'

const ListItem = ({ item }) => {
    const { title, body } = item
    return (
        <div>
            <li>
                <h2>{title}</h2>
                <p>{body}</p>
            </li>
        </div>
    )
}

export default ListItem