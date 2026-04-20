function simplifyPath(path) {
    let stack = [];
    let components = path.split('/');

    for (let component of components) {
        if (component === '' || component === '.') {
            continue;
        } else if (component === '..') {
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            stack.push(component);
        }
    }

    return '/' + stack.join('/');
}

console.log(simplifyPath("/a/./b/../../c/")); // /c
console.log(simplifyPath("/../")); // /
console.log(simplifyPath("/home/")); // /home
console.log(simplifyPath("/home//foo/")); // /home/foo
console.log(simplifyPath("/a/./b/../../c/")); // /c
