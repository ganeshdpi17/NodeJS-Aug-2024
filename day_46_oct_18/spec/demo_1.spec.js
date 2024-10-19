const { add, isEven, cars, addNewCar, findMax } = require("../demo_1")

describe('I am Testing demo_1 file', () => {
    it('should test add function', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-2, -3)).toBe(-5);
        expect(add(2, -3)).toBe(-1);
        expect(add(-2, 3)).toBe(1);
    });
    it('should verify isEven Method', () => {
        expect(isEven(4)).toBe('even');
        expect(isEven(5)).not.toBe('even');
        expect(isEven(7)).toBe('odd');
        expect(isEven(8)).not.toBe('odd');
    });
    it('should verify addNewCar Method', () => {
        expect(cars).toBeDefined();
        expect(cars.length).toBe(2);
        expect(cars).toContain('Tata');
        expect(cars).not.toContain('Maruti');
        addNewCar('Maruti');
        expect(cars).toBeDefined();
        expect(cars.length).toBe(3);
        expect(cars).toContain('Tata');
        expect(cars).toContain('Maruti');
        expect(cars).not.toContain('BMW');
        expect(cars).toEqual(['Tata', 'Honda', 'Maruti']);
    });
    it('It from demo-1', () => {
        console.log('It from demo-1')
    })
    it('It should test getEmployees', () => {
        spyOn(Math,'max').and.returnValue(100);
        expect(findMax(10, 50, 20)).toBe(100);
    })

})