import "./Header.css";

function Header({ children }) {
    return (
        <div class="header">
            <h1>{children}</h1>
        </div>
    );
}

export default Header;