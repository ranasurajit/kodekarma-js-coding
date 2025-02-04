Caesar's Cipher
===============

**Description:** Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, `w`, `x`, `y`, and `z` would map to `z`, `a`, `b`, and `c`.

Create a function `caesarCipher(s, k)` that takes a string `s` (text to be encrypted) and an integer `k` (the rotation factor). It should return an encrypted string.

### **Function Signature:**

    function caesarCipher(s: string, k: number): string

### **Examples:**

#### Example 1:

    caesarCipher("middle-Outz", 2);
    // Output: "okffng-Qwvb"

Explanation:

*   `m -> o`
    
*   `i -> k`
    
*   `d -> f`
    
*   `d -> f`
    
*   `l -> n`
    
*   `e -> g`
    
*   `- -> -`
    
*   `O -> Q`
    
*   `u -> w`
    
*   `t -> v`
    
*   `z -> b`
    

#### Example 2:

    caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5);
    // Output: "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"
    

#### Example 3:

    caesarCipher("A friend in need is a friend indeed", 20);
    // Output: "U zlcyhx ch hyyx cm u zlcyhx chxyyx"
    

### **Notes:**

*   All test input will be a valid ASCII string.
    
*   Both uppercase and lowercase letters should be handled.
    
*   Non-alphabetic characters (e.g., `-`, space) remain unchanged.
