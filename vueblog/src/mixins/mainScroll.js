export default function (refValue) {
    return {
        mounted() {
            this.$refs[refValue].addEventListener('scroll', this.handleScroll);
            this.eventBus.$on('toTop', this.handleToTop);
        },
        methods: {
            handleScroll() {
                this.eventBus.$emit('scroll', this.$refs[refValue]);
            },
            handleToTop(scrollTop) {
                this.$refs[refValue].scrollTop = scrollTop;
            }
        },
        beforeDestroy() {
            this.handleToTop(0);
            this.handleScroll()

            this.$refs[refValue].removeEventListener('scroll', this.handleScroll);
            this.eventBus.$off('toTop', this.handleToTop);
        }
    }
}