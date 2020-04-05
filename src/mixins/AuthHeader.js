export default {
    methods: {
        getAuthAHeader: function() {
            return {
                headers: {
                  Authorization: "Bearer " + this.$store.state.token
                }
              };
        }
        
    },
}