<template>
  <div class="bg-primary">
    <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
        <main>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-5">
                <div class="card shadow-lg border-0 rounded-lg mt-5">
                  <div class="card-header justify-content-center">
                    <h3 class="font-weight-light my-4">Password Recovery</h3>
                  </div>
                  <div class="card-body">
                    <div
                      class="small mb-3 text-muted"
                    >Enter your email address and we will send you a link to reset your password.</div>
                    <form>
                      <div class="form-group">
                        <label class="small mb-1" for="inputEmailAddress">Email</label>
                        <input
                          class="form-control form-control-solid py-4"
                          id="inputEmailAddress"
                          type="email"
                          aria-describedby="emailHelp"
                          placeholder="Enter email address"
                        />
                      </div>
                      <div
                        class="form-group d-flex align-items-center justify-content-between mt-4 mb-0"
                      >
                        <router-link to="login">Return to login</router-link>
                        <a class="btn btn-primary" href="javascript:;">Reset Password</a>
                      </div>
                    </form>
                  </div>
                  <div class="card-footer text-center">
                    <div class="small">
                      <router-link to="register">Need an account? Sign up!</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div id="layoutAuthentication_footer">
        <footer class="footer mt-auto footer-dark">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6 small">Copyright &#xA9; Your Website 2020</div>
              <div class="col-md-6 text-md-right small">
                <a href="#!">Privacy Policy</a>
                &#xB7;
                <a href="#!">Terms &amp; Conditions</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ForgotPassword",
  mixins: [],
  data: function() {
    return {
      form: {
        email: ""
      }
    };
  }
};
</script>