import "./style.css";

const Header = () => {
    return (
        <div className = "header">
            <div className = "header_wrapper">
                <h1 className="header__title">
                    <strong> 
                        Hi, my name is <em>Valentyn</em>
                    </strong>
                     <br /> a front end developer
                </h1>
                <div className = "header__text">
                    <p> with passion learning and creating </p>
                </div>
                <a href = "#" className="btn">
                    Download cv
                </a>
            </div>

        </div>
    );
}

export default Header

