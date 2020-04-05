<template>
  <div class="bg-primary">
    <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
        <main>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-5 col-lg-6 col-md-8 col-sm-11">
                <div class="card my-5">
                  <div class="card-body pl-5 pr-5 pb-3 pt- text-center">
                    <div class="h3 font-weight-light mb-3">Sign In</div>
                  </div>
                  <hr class="my-0" />
                  <div class="card-body p-5">
                    <form>
                      <div class="form-group">
                        <label class="text-gray-600 small" for="email">Email address</label>
                        <input
                          class="form-control form-control-solid py-4"
                          name="email"
                          type="text"
                          v-model="form.email"
                          placeholder="Email Address"
                          aria-describedby="email"
                        />
                      </div>
                      <div class="form-group">
                        <label class="text-gray-600 small" for="passwordExample">Password</label>
                        <input
                          class="form-control form-control-solid py-4"
                          name="password"
                          v-model="form.password"
                          type="password"
                          placeholder="Password"
                        />
                      </div>
                      <div class="form-group"></div>
                      <div
                        class="form-group d-flex align-items-center justify-content-between mb-0"
                      >
                        <router-link to="forgot-password">Forgot your password?</router-link>
                        <button type="button" class="btn btn-primary" @click="submitForm()">Login</button>
                      </div>
                    </form>
                  </div>
                  <hr class="my-0" />
                  <div class="card-body px-5 py-4">
                    <div class="small text-center">
                      New user?
                      <router-link to="register">Create an account!</router-link>
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
import RequestMixin from "@/mixins/RequestMixin";
export default {
  name: "Login",
  mixins: [RequestMixin],
  data: function() {
    return {
      loginUrl: "api/authenticate",
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    submitForm: function() {
      var url = this.$store.state.serverUrl + "/" + this.loginUrl;
      this.postRequest(url, this.form)
        .then(result => {
          var payload = result.data.data;
          payload["token"] = result.headers.token;
          this.$store.commit("token", result.data.data);
          this.$router.push("/");
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {}
};
</script>