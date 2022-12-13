function Nav() {
    return (
        <div className="Nav">
            <ul>
                <li><a class="active" href="/">Home</a></li>
                <li><a href="#events">What's On</a></li>
                <li id="login"><a href="login">Log in</a></li>
            </ul>
        </div>
    );

}

export default Nav;