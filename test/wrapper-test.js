const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");
const assert = require('assert');



describe("Wrapper", function () {
  let signers;
  let owner;
  let wrapper;
  let NFTWrapper;

  beforeEach(async function () {
      NFTWrapper = await ethers.getContractFactory("NFTWrapper");
      wrapper = await NFTWrapper.deploy("0xF7a6E15dfD5cdD9ef12711Bd757a9b6021ABf643", "hhh", "yyy");
      await wrapper.deployed();
      signers = await ethers.getSigners();
      owner = signers[0];
      player = signers[1];
      player2 = signers[2];
  });


    it("test_wrapper_setBaseURI", async function () {
  
      const setBaseURITx = await wrapper.setBaseURI("xxx");
  
      // wait until the transaction is mined
      await setBaseURITx.wait();
      expect(await wrapper.showBaseURI()).to.equal("xxx");
    });


    it("test_wrapper_setContractURI", async function () {

      const setContractURITx = await wrapper.setContractURI("ggg");
  
      // wait until the transaction is mined
      await setContractURITx.wait();
      expect(await wrapper.showcontractURI()).to.equal("ggg");
    });


    it('ERC721Metadata: URI query for nonexistent token', async () => {

        try{
       await wrapper.tokenURI(1)({
        from: signers[0]
            });
            assert(false);
        } catch(err){
            assert(err);
        }
      });


    it('ERC721: owner query for nonexistent token', async () => {

          try{
         await wrapper.unwrap(1)({
          from: signers[1]
              });
              assert(false);
          } catch(err){
              assert(err);
          }
        });
});