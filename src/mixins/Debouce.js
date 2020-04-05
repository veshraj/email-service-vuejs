export default {
    methods: {
        debouce: function(duration = 500, callback) {
            clearTimeout(this.timeOut);
            this.timeOut = setTimeout(function() {
                callback();
            }, duration)
        }
    }
}       