import { v4 as uuidv4 } from "uuid";
import wishes from "../mock-data/wishes-list.json";

const defaultCategory = { id: 0, name: "Вибрати бажання", wishes: [] };

export default () => {
    return {
        open: false,
        selected: defaultCategory,
        selectCategory(category) {
            this.selected = category;
            this.open = false;
        },
        categories: Object.keys(wishes).map((name) => {
            return {
                id: uuidv4(),
                name,
                wishes: wishes[name].map((wish) => {
                    return { id: uuidv4(), name: wish };
                }),
            };
        }),
        userWishes: [],
        addOrRemoveWish(wish) {
            if (this.isWishAdded(wish)) {
                this.userWishes = this.userWishes.filter(
                    (item) => item.id !== wish.id
                );
            } else {
                this.userWishes.push(wish);
            }
        },
        isWishAdded(wish) {
            return this.userWishes.find((item) => item.id === wish.id);
        },
        searchWishes(event) {
            const query = event.target.value.toLowerCase();
            if (query === "") {
                return;
            }
            this.selected = defaultCategory;
            this.selected.wishes = this.categories
                .flatMap((category) => category.wishes)
                .filter((wish) => wish.name.toLowerCase().includes(query));
        },
        get randomWish() {
            const allWishes = this.categories.flatMap(
                (category) => category.wishes
            );
            return allWishes[Math.floor(Math.random() * allWishes.length)];
        },
    };
};
