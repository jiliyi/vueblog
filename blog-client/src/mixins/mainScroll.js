export default function (refValue) {
    return {
        mounted() {
            this.$refs[refValue].addEventListener('scroll', this.handleMainScroll);
            this.eventBus.$on('toTop', this.handleToTop);
        },
        methods: {
            handleMainScroll() {
                this.eventBus.$emit('scroll', this.$refs[refValue]);
            },
            handleToTop(scrollTop) {
                this.$refs[refValue].scrollTop = scrollTop;
            }
        },
        beforeDestroy() {
            this.handleToTop(0);
            this.handleMainScroll()

            this.$refs[refValue].removeEventListener('scroll', this.handleMainScroll);
            this.eventBus.$off('toTop', this.handleToTop);
        }
    }
}