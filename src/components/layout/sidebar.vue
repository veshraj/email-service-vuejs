<template>
  <div id="layoutSidenav_nav">
    <nav class="sidenav shadow-right sidenav-light">
      <div class="sidenav-menu">
        <div class="nav" >
            <div class="nav" id="accordionSidenav">
            <div class="sidenav-menu-heading">Interface</div>
            </div>
            <router-link to="/vendors" class="nav-link">
                <div class="nav-link-icon">
                <i data-feather="bar-chart"></i>
                </div>Email Vendors
            </router-link>
            <router-link to="/vendors/emails" class="nav-link">
                <div class="nav-link-icon">
                <i data-feather="bar-chart"></i>
                </div>Email Sent via Vendors
            </router-link>
            <router-link to="/smtp-hosts" class="nav-link">
                <div class="nav-link-icon">
                <i data-feather="bar-chart"></i>
                </div>SMTP Hosts
            </router-link>
            <router-link to="/smtp-emails" class="nav-link">
                <div class="nav-link-icon">
                <i data-feather="bar-chart"></i>
                </div>SMTP Emails
            </router-link>
        </div>
      </div>
      <div class="sidenav-footer">
        <div class="sidenav-footer-content">
          <div class="sidenav-footer-subtitle">Logged in as:</div>
          <div class="sidenav-footer-title">Valerie Luna</div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "side-bar-app",
  data: function() {
    return {};
  }
};
</script>