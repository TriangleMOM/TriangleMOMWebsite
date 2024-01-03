import './Navbar.css';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top m-0 p-0">
            <div class="container-fluid m-0 pb-2 pt-2" id="collapsible-navbar">
                <a class="navbar-brand">Triangle MOM</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleContent">
                    <span class="navbar-toggler-icon navbar-dark"></span>
                </button>

                <div class="collapse navbar-collapse" id="collapsibleContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active text-white">Element 1<span class="sr-only">(Current)</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;