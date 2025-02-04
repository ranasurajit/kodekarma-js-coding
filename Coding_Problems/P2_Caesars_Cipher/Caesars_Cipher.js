const caesarCipher = (s, k) => {
    const n = s.length;
    let result = '';
    for (let i = 0; i < n; i++) {
        let initCode = s.charCodeAt(i);
        if ((initCode >= 65 && initCode <= 90) || (initCode >= 97 && initCode <= 122)) {
            let newCode = 0;
            if (initCode >= 65 && initCode <= 90) {
                newCode = initCode + k;
                if (newCode > 90) {
                    newCode -= 26;
                }
            } else if (initCode >= 97 && initCode <= 122) {
                newCode = initCode + k;
                if (newCode > 122) {
                    newCode -= 26;
                }
            }
            result += String.fromCharCode(newCode);
        } else {
            result += s[i];
        }
    }
    return result;
};
module.exports = caesarCipher;

// Test

const result = caesarCipher('middle-Outz', 2);
console.log(result);
