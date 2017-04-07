export const actionCreator = type => payload => ({ type, payload });

export const equalByProps = (obj1, obj2, props) =>
    props.some(prop => obj1[prop] !== obj2[prop]);
