import classes from './MainNavigation.module.css'

function MainNavigation() {
    return (
        <header className={classes.header}>
            {/* <HamMenuContent contents={contents} /> */}
            {/* <HamMenu toggleMenuHide={() => toggleMenuHide()} /> */}
            {/* <HamMenuFAB toggleMenuHide={() => toggleMenuHide()} /> */}
            <nav>
                <ul>
                    <li>
                        {/* <Link href='/'>All Meetups</Link> */}
                    </li>
                    <li>
                        {/* <Link href='/new-meetup'>Add New Meetup</Link> */}
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation