const Contacts = () => {
    return (
    <main className="section">
        <div className="container">
            <h1 className="title-1">Contacts</h1>

            <ul className="content-list">
                <li className="content-list__item">
                    <h2 className="title-2">Location</h2>
                    <p>Ukraine, Ivano-Frankivsk</p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Telegram / WhatsApp</h2>
                    <p><a href="tel:+380667256053">+3 8066 725-60-53</a></p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Email</h2>
                    <p><a href="mailto:chystiakovvalentyn@gmail.com">chystiakovvalentyn@gmail.com</a></p>
                </li>
            </ul>

        </div>
    </main>
)

}

export default Contacts;