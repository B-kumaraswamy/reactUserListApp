function FlagsComponent(props) {
    const {details, onDelete} = props
    const {imageUrl, country, language} = details;

    const onDeleteCountry = () => {
        onDelete(language)

    }
    return (

        <li>
            <img src = {imageUrl} width = "5%" alt = "loading"/>
            <div>
                <h2>{country}</h2>
                <label>{language}</label>
                <button onClick = {onDeleteCountry}>X</button>
            </div>
        </li>

    )
}

export default FlagsComponent;
