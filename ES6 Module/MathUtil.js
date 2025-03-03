export const pi = 3.14;

export function getCircumference(radius){ //function to get circumference
    return 2 * pi * radius;

}

export function getArea(radius){
    return pi * radius * radius;

}

export function getVolume(radius){
    return 4 * pi * radius * radius;
}