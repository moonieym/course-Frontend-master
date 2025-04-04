// Permute

function permute (str, path = '', result = []) {
    if(str.length === 0) {
        result.push(path);
    } else {
        for(let i = 0; i < str.length; i++) {
            const remaining = str.slice(0, 1) + str.slice(i + 1);
        }
    }
    return result;
}

const result = permute('abc');
console.log(result);

