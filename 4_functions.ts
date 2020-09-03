function add(a: number, b: number): number {
    return a + b;
}

interface MyPosition {
    x: number | undefined,
    y: number | undefined,
}

interface MyPositionWithDefault extends MyPosition {
    default: string
}

function position(): MyPosition
function position(a: number): MyPositionWithDefault
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number) {
     if (!a && !b) {
         return {
             x: undefined,
             y: undefined
         }
     }

     if (a && !b) {
         return {
             x: a,
             y: undefined,
             default: a.toString()
         }
     }

     return {
         x: a,
         y: b
     }
}

console.log('Empty: ', position()); // Empty:  { x: undefined, y: undefined }
console.log('One param: ', position(7)); // One param:  { x: 7, y: undefined, default: '7' }
console.log('Two params: ', position(1, 2)); // Two params:  { x: 1, y: 2 }

