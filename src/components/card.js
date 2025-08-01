export default () => {
    return {
        name: "",
        init() {
            console.log("card component loaded");
        },
        test() {
            alert("Hi " + this.name);
        },
    };
};
