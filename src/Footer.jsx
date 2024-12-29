import reactLogo from './assets/react.svg'

function Footer(){
    return(
        <footer>
            <div>
                <h2> &copy; {new Date().getFullYear()} Thanveer Muthukumar</h2>
            </div>
            <div class="madewith">
                <p>made with React</p>
                <img src={reactLogo} alt="React Logo" />
            </div>
        </footer>
    );
}

export default Footer;