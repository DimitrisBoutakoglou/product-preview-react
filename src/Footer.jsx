function Footer(){

    const styles = {
        color: "hsla(228, 12%, 48%, 0.90)",
        fontFamily: '"Montserrat", Arial, Helvetica, sansSerif',
        fontSize: "10px",
        fontWeight: "500",
        position: "absolute",
        bottom: "0",
        marginLeft: "50px",
    }

    return(
        <div style={styles}>
            <footer>
                <p>Challenge by: <a target="_blank" href="https://www.frontendmentor.io">https://www.frontendmentor.io </a>
                Coded by: <a target="_blank" href="https://github.com/DimitrisBoutakoglou">https://github.com/DimitrisBoutakoglou</a>
                </p>
            </footer>
        </div>
    );
}

export default Footer