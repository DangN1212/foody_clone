import { ORDER } from '../constant';

const increment = params => {
    return { type: ORDER.increase };
};

const decrement = () => {
    return { type: ORDER.decrease };
};

export { increment, decrement };
