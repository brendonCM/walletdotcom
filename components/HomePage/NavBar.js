import { signIn, signOut} from "next-auth/react";

export function NavBar(props){
    
    return (
        <nav className="navbar navbar-expand-lg bg-primary fixed-top navbar-transparent " color-on-scroll="400">
            <div className="container">
                <div className="navbar-translate">
                    <a className="navbar-brand" href="./index.html" rel="tooltip" data-placement="bottom" target="_blank">
                    WASP
                    </a>
                    <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-bar top-bar"></span>
                    <span className="navbar-toggler-bar middle-bar"></span>
                    <span className="navbar-toggler-bar bottom-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse justify-content-end" id="navigation" data-nav-image="/blurred-image-1.jpg">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {
                            props.session ?  (<p className="nav-link">Payment email: {props.session.user.email}</p>) : (<p className="nav-link">Payment email: ### ### ### ###</p>)
                            }
                            
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0)" onClick="scrollToDownload()">
                            <i className="now-ui-icons business_money-coins"></i>
                            <p>Balance: R{props.user.balance}</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0)" onClick="scrollToDownload()">
                            <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                            <p>Withdraw money</p>
                            </a>
                        </li>
                        {
                            props.session ?            
                            (<li className="nav-item">
                            <a className="nav-link" href="javascript:void(0)" onClick={signOut}>
                                <i className="now-ui-icons objects_key-25"></i>
                                <p>Logout</p>
                            </a>
                            </li>) : 
                            (<li className="nav-item">
                                <a className="nav-link" href="javascript:void(0)" onClick={signIn}>
                                    <i className="now-ui-icons objects_key-25"></i>
                                    <p>Login</p>
                                </a>
                            </li>)  
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
} 