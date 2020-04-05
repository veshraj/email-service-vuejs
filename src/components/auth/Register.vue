<template>
  <div class="bg-primary">
    <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
        <main>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-7">
                <div class="card shadow-lg border-0 rounded-lg mt-5">
                  <div class="card-header justify-content-center">
                    <h3 class="font-weight-light my-4">Create Account</h3>
                  </div>
                  <div class="card-body">
                    <form>
                      <div class="form-row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="small mb-1" for="inputFirstName">Name</label>
                            <input
                              class="form-control form-control-solid py-4"
                              v-model="form.name"
                              id="inputName"
                              name="name"
                              type="text"
                              placeholder="Enter name"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="small mb-1" for="inputLastName">Mobile Number</label>
                            <input
                              class="form-control form-control-solid py-4"
                              v-model="form.mobileNumber"
                              name="mobileNumber"
                              id="inputMobileNumber"
                              type="text"
                              placeholder="Enter Mobile name"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="small mb-1" for="inputEmail">Email</label>
                        <input
                          class="form-control form-control-solid py-4"
                          id="inputEmail"
                          type="email"
                          v-model="form.email"
                          placeholder="Enter email address"
                        />
                      </div>
                      <div class="form-row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="small mb-1" for="inputPassword">Password</label>
                            <input
                              class="form-control form-control-solid py-4"
                              id="inputPassword"
                              name="password"
                              v-model="form.password"
                              type="password"
                              placeholder="Enter password"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="small mb-1" for="inputConfirmPassword">Confirm Password</label>
                            <input
                              class="form-control form-control-solid py-4"
                              id="inputConfirmPassword"
                              name="confrimPassword"
                              v-model="form.confirmPassword"
                              type="password"
                              placeholder="Confirm password"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group mt-4 mb-0">
                        <a
                          class="btn btn-primary btn-block"
                          @click="submitForm"
                          href="javascript:;"
                        >Create Account</a>
                      </div>
                    </form>
                  </div>
                  <div class="card-footer text-center">
                    <div class="small">
                      <router-link to="/login">Have an account? Go to login</router-link>
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
  name: "Register",
  mixins: [RequestMixin],
  data: function() {
    return {
      registerUrl: "api/users/register",
      form: {
        name: "",
        email: "",
        mobleNumber: "",
        password: "",
        password_confirmation: ""
      }
    };
  },
  methods: {
    submitForm: function() {
      var url = this.$store.state.serverUrl + "/" + this.registerUrl;
      this.postRequest(url, this.form)
        .then(() => {
          this.$router.push("/login");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>