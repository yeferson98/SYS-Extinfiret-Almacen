export function isNullOrUndefined(arg:any) {
    return arg === null || arg === undefined || arg === '';
}
export function existClassForId(id:any, name:any) {
    var input = document.getElementById(id) as any;
    if (input.classList.contains(name)) {
        return true;
    } else {
        return false;
    }
}
export function removedScrollDialog() {
    var element = document.getElementsByClassName("p-dialog-content") as any;
    element[0].style.overflow = 'hidden';
}