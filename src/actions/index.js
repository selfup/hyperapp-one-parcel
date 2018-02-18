export default {
    up() {
        return ({ num }) => ({ num: num + 1 });
    },
    down() {
        return ({ num }) => ({ num: num - 1 });
    },
};
