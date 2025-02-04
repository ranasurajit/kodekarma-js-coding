Splitting Objects Inside an Array
=================================

You bought a few bunches of fruit over the weekend. Create a function `splitBunches` that splits a bunch into singular objects inside an array.

    splitBunches([
      { name: "grapes", quantity: 2 }
    ]);
    // ➞ [
    //   { name: "grapes", quantity: 1 },
    //   { name: "grapes", quantity: 1 }
    // ]
    
    splitBunches([
      { name: "currants", quantity: 1 },
      { name: "grapes", quantity: 2 },
      { name: "bananas", quantity: 2 }
    ]);
    // ➞ [
    //   { name: "currants", quantity: 1 },
    //   { name: "grapes", quantity: 1 },
    //   { name: "grapes", quantity: 1 },
    //   { name: "bananas", quantity: 1 },
    //   { name: "bananas", quantity: 1 }
    // ]

#### **Notes:**

1.  The input array will never be empty.
    
2.  Objects will always have a name and quantity over 0.
    
3.  The returned object should have each fruit in the same order as the original.
