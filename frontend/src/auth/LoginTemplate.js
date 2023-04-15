
const LoginTemplate = (handleLogin) => (
        <div class="theme-layout">
            <div class="authtication bluesh high-opacity">
                {/* <div class="bg-image" style="background-image: url(images/resources/login-bg3.jpg)"></div> */}
                <ul class="welcome-caro">
                    <li class="welcome-box">
                        <figure><img src={require('../assest/images/resources/login-1.png')} alt="" /></figure>
                        <h4>Ask questions with seniors Researchers</h4>
                        <p>
                            Ask questions and get the experienced answer by researchers and others fellows.
                        </p>
                    </li>
                    <li class="welcome-box">
                        <figure><img src="{require(../assest/images/resources/login-2.png)}" alt="" /></figure>
                        <h4>Find New Researchers or Friends</h4>
                        <p>
                            Join Socimo and make your network of university or college fellows.
                        </p>
                    </li>
                    <li class="welcome-box">
                        <figure><img src="../assest/images/resources/login-3.png" alt="" /></figure>
                        <h4>Sell Your Online paid Content</h4>
                        <p>
                            Sell your online lectures, videos, books and many more with Socimo.
                        </p>
                    </li>
                    
                </ul>
            </div>
            <div class="auth-login">
                <div class="logo"><img src="../assest/images/logo.png" alt=""/><span>Xyopst Social</span></div>
                <div class="mockup left-bottom"><img src="images/mockup.png" alt=""/></div>
                <div class="verticle-center">
                    <div class="login-form">
                        <h4><i class="icofont-key-hole"></i> Login</h4>
                        <form method="post" class="c-form" onSubmit={handleLogin}>
                            <input type="text" placeholder="Username @"   />
                            <input type="password" placeholder="xxxxxxxxxx" />
                            <div class="checkbox">
                                <input type="checkbox" id="checkbox" checked/>
                                <label for="checkbox"><span>Remember Me</span></label>
                            </div>
                            <button class="main-btn" type="submit"><i class="icofont-key"></i> Login</button>
                      </form>
                    </div>
                </div>
                <div class="mockup right"><img src="images/star-shape.png" alt=""/></div>
            </div>

            </div>
     );
   
export default LoginTemplate;