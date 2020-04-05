<template>
  <div>
    <topheader></topheader>
    <div id="layoutSidenav">
      <sidebar></sidebar>
      <div id="layoutSidenav_content">
        <main>
          <div class="page-header pb-10 page-header-dark bg-gradient-primary-to-secondary">
            <div class="container-fluid">
              <div class="page-header-content">
                <h1 class="page-header-title">
                  <div class="page-header-icon">
                    <i data-feather="activity"></i>
                  </div>
                  <span>Vendor List(Emails Service Provider)</span>
                </h1>
                <div class="page-header-subtitle">Email List of Sent Via Serveice Providers</div>
              </div>
            </div>
          </div>
          <div class="container-fluid mt-n10">
            <div class="card mb-4">
              <div class="card-header">Email List</div>
              <div class="card-body">
                <router-link to="/compose/vendor-email" class="btn btn-primary btn-lg mb-3"> Compose Email</router-link>
                <div class="datatable table-responsive">
                  <table
                    class="table table-bordered table-hover"
                    id="dataTable"
                    width="100%"
                    cellspacing="0"
                  >
                    <thead>
                      <tr>
                        <th colspan="5">
                          <h5>Search:</h5> <input type="text" v-model="searchText" @keyup="filter()" class="form-control"/>
                        </th>
                      </tr>
                      <tr>
                        <th>From</th>
                        <th>To</th>
                        <th>Subject</th>
                        <th>Message</th>
                        <th>Vendor</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>From</th>
                        <th>To</th>
                        <th>Subject</th>
                        <th>Message</th>
                        <th>Vendor</th>
                      </tr>
                    </tfoot>
                    <tbody>
                      <tr v-for="item in dataList" :key="item.id">
                        <td>{{ item.from }}</td>
                        <td>{{ item.to }}</td>
                        <td>{{ item.subject }}</td>
                        <td>{{ item.message }}</td>
                        <td>
                          Name: {{ item.vendor.name }}
                          <br />
                          ApiKey: {{ item.vendor.apiKey }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer class="footer mt-auto footer-light">
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
import sidebar from "@/components/layout/sidebar";
import topheader from "@/components/layout/topheader";
import RequestMixin from "@/mixins/RequestMixin";
import AuthHeader from '@/mixins/AuthHeader';
import Debouce from '@/mixins/Debouce';
export default {
  name: "VendorEmailList",
  mixins: [RequestMixin, AuthHeader, Debouce],
  data: function() {
    return {
      searchText: '',
      searchUri: '',
      listApi: "api/vendor/emails",
      dataList: []
    };
  },
  components: {
    sidebar,
    topheader
  },
  methods: {
    filter: function() {
      this.searchUri = (this.searchText === '') ? '' : "?search="+this.searchText;
      var __self = this;
      this.debouce(500, function(){
        __self.loadData()
      });
    },
    loadData: function() {
      var url = this.$store.state.serverUrl + "/" + this.listApi+this.searchUri;
      this.getRequest(url, this.getAuthAHeader())
        .then(result => {
          this.dataList = result.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>