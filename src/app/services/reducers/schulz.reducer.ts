import * as SchulzActions from '../schulz.actions';

const createSchulz = () => {
    let schulz = [
        1, 2, 3, 4, 5, 6, 7, 8, 9,
        10,11,12,13,14,15,16,17,18,
        19,20,21,22,23,24,25
    ];

    const convertFlat = (flat: number[]) => {
        let matrix: number[][] = [];
        let index: number = 0;
        for (let i=0; i < 5; i++) {
            let cols = [];
            for (let j=0; j < 5; j++) {
                cols[j] = flat[index++];
            }
            matrix.push(cols);
        }
        return matrix;
    };

    const getRandomInt = (min = 1, max = 26) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    const countRandom = getRandomInt(26, 36);
    for (let i = 0; i<countRandom; i++) {
        let firstIndex = getRandomInt(1, 26) - 1;
        let secondIndex = getRandomInt(1, 26) - 1;
        let newSchulz = [...schulz];
        newSchulz[firstIndex] = schulz[secondIndex];
        newSchulz[secondIndex] = schulz[firstIndex];
        schulz = newSchulz;
    }
    return convertFlat(schulz);
};

export const schulz = (state: number[][] = [], action: {type: string} = {type: SchulzActions.GENERATE}) => {
    switch (action.type) {
        case SchulzActions.GENERATE:
            return createSchulz();
        default:
            return state;
    }
};