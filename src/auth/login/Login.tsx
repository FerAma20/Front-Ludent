import { Link } from "react-router-dom";

const Login = () => {
    const estilo = {
        backgroundImage: 'url(../src/assets/images/background/login-register.jpg)' 
      };
    return (
      <>
      <section id="wrapper" className="login-register login-sidebar" style={estilo} >
        <div className="login-box card">
            <div className="card-body">
                <form className="form-horizontal form-material" id="loginform" action="index.html">
                    <a href="javascript:void(0)" className="text-center db"><img src="../src/assets/images/logo-icon.png" alt="Home" /><br/><span className='text_navbar'>LUDENT    </span></a>
                    <div className="form-group m-t-40">
                        <div className="col-xs-12">
                            <input className="form-control" type="text"  placeholder="Username"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-12">
                            <input className="form-control" type="password"  placeholder="Password" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-12">
                            <div className="checkbox checkbox-primary pull-left p-t-0">
                                <input id="checkbox-signup" type="checkbox" className="filled-in chk-col-light-blue"/>
                                <label htmlFor="checkbox-signup"> Remember me </label>
                            </div>
                            <a href="javascript:void(0)" id="to-recover" className="text-dark pull-right"><i className="fa fa-lock m-r-5"></i> Forgot pwd?</a> </div>
                    </div>
                    <div className="form-group text-center m-t-20">
                        <div className="col-xs-12">
                        <Link to='/Dashboard' key="1">
                        <button className="btn btn-info btn-lg btn-block text-uppercase btn-rounded">Log In</button>
                        </Link>
                           
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
                            <div className="social"><a href="javascript:void(0)" className="btn  btn-facebook" data-toggle="tooltip" title="Login with Facebook"> <i aria-hidden="true" className="fa fa-facebook"></i> </a> <a href="javascript:void(0)" className="btn btn-googleplus" data-toggle="tooltip" title="Login with Google"> <i aria-hidden="true" className="fa fa-google-plus"></i> </a> </div>
                        </div>
                    </div>
                    <div className="form-group m-b-0">
                        <div className="col-sm-12 text-center">
                            Don't have an account? <a href="pages-register2.html" className="text-primary m-l-5"><b>Sign Up</b></a>
                        </div>
                    </div>
                </form>
                <form className="form-horizontal" id="recoverform" action="index.html">
                    <div className="form-group ">
                        <div className="col-xs-12">
                            <h3>Recover Password</h3>
                            <p className="text-muted">Enter your Email and instructions will be sent to you! </p>
                        </div>
                    </div>
                    <div className="form-group ">
                        <div className="col-xs-12">
                            <input className="form-control" type="text"  placeholder="Email" />
                        </div>
                    </div>
                    <div className="form-group text-center m-t-20">
                        <div className="col-xs-12">
                            <button className="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
      </>
    );
  };
  
  export default Login;