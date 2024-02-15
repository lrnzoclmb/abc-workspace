describe("SolidityDataTypes", function() {
    it("should deploy properly", async function() {
        const SolidityDataTypes = await ethers.getContractFactory("SolidityDataTypes");

        const contract = await SolidityDataTypes.deploy();

    });       
});