const apiHandlers = require("./apiHandlers");

describe("apiHandlers.handleGetEmployees", () => {
    describe("handleGetEmployees", () => {
        it("should return result when params department filter is not provided", () => {
            //arrange

            //act
            const result = apiHandlers.handleGetEmployees();

            //assert
            expect(result.length).not.toBe(0);
        });

        it("should return result when department is valid", () => {
            //arrange
            const department = "IT";
            //act
            const result = apiHandlers.handleGetEmployees(department);

            //assert
            expect(result.length).not.toBe(0);
        });

        it("should return empty array result when department is not valid", () => {
            //arrange
            const department = "1";
            //act
            const result = apiHandlers.handleGetEmployees(department);
            
            //assert
            expect(result.length).toBe(0);
        });
    })

    describe("handleGetSpecificEmployee", () => {
        it("should return employee when valid id is provided", () => {
            //arrange
            const employee_id = 1;
            //act
            const result = apiHandlers.handleGetSpecificEmployee(employee_id);

            //assert
            expect(result.name).toBeDefined();
            expect(result.title).toBeDefined();
            expect(result.department).toBeDefined();
            expect(result.dob).toBeDefined();
            expect(result.avatarUrl).toBeDefined();
        });

        it("should throw an exception when employee_id is not provided", () => {
            //assert
            expect(() => {
                apiHandlers.handleGetSpecificEmployee()
            }).toThrow();
        });

        it("should throw an exception when employee_id is not valid", () => {
            //arrange
            const employee_id = "asd";
            //act
            //assert
            expect(() => {
                apiHandlers.handleGetSpecificEmployee(employee_id)
            }).toThrow();
        });
    })
});